package com.codewithudo.backend;

import com.codewithudo.backend.models.*;
import com.codewithudo.backend.repositories.*;
import com.codewithudo.backend.services.PaystackService;
// import com.codewithudo.backend.util.JwtTestUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.codewithudo.backend.util.JwtTokenUtil;
import java.math.BigDecimal;
import java.util.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional(propagation = Propagation.NOT_SUPPORTED)
public class OrderFlowIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ArtworkRepository artworkRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @MockBean
    private PaystackService paystackService;

    private User buyer;
    private Artwork artwork;
    private String token;
    private Order createdOrder;

    @BeforeEach
    void setup() {
        orderRepository.deleteAll();
        artworkRepository.deleteAll();
        userRepository.deleteAll();
        buyer = new User();
        buyer.setName("Test Buyer");
        buyer.setEmail("buyer@example.com");
        buyer.setPasswordHash(passwordEncoder.encode("password"));
        buyer.setRole(User.Role.CUSTOMER);
        userRepository.saveAndFlush(buyer);
        artwork = new Artwork();
        artwork.setTitle("Test Artwork");
        artwork.setDescription("Desc");
        artwork.setPrice(BigDecimal.valueOf(100));
        artwork.setImageUrl("http://example.com/image.jpg");
        artwork.setCategory("Painting");
        artwork.setArtist(buyer); // For test simplicity
        artworkRepository.save(artwork);
        token = jwtTokenUtil.generateToken(buyer.getEmail());
    }

    @Test
    void testOrderCreationAndFlow() {
        // Mock PaystackService to always return a successful verification
        PaystackVerificationResponse.PaystackTransactionData data = new PaystackVerificationResponse.PaystackTransactionData();
        data.setStatus("success");
        data.setAmount(10000); // 100.00 in Naira (Paystack returns kobo)
        PaystackVerificationResponse response = new PaystackVerificationResponse();
        response.setStatus(true);
        response.setData(data);
        Mockito.when(paystackService.verifyTransaction(Mockito.anyString())).thenReturn(response);

        // 1. Order creation
        String url = "http://localhost:" + port + "/api/orders";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        CheckoutRequest req = new CheckoutRequest();
        req.setPaymentReference("test-ref");
        req.setShippingAddress("123 Test St");
        req.setArtworkIds(List.of(artwork.getId()));
        HttpEntity<CheckoutRequest> request = new HttpEntity<>(req, headers);
        ResponseEntity<Order> responseEntity = restTemplate.postForEntity(url, request, Order.class);
        System.out.println("Order creation response: status=" + responseEntity.getStatusCode() + ", body=" + responseEntity.getBody());
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
        createdOrder = responseEntity.getBody();

        // 2. Order details fetch (by id)
        String detailsUrl = "http://localhost:" + port + "/api/orders/" + createdOrder.getId();
        ResponseEntity<Order> detailsResp = restTemplate.exchange(detailsUrl, HttpMethod.GET, new HttpEntity<>(headers), Order.class);
        System.out.println("Order details response: status=" + detailsResp.getStatusCode() + ", body=" + detailsResp.getBody());
        assertEquals(HttpStatus.OK, detailsResp.getStatusCode());
        assertEquals(createdOrder.getId(), detailsResp.getBody().getId());

        // 3. Order status update (production, shipped, delivered)
        String statusUrl = "http://localhost:" + port + "/api/orders/" + createdOrder.getId() + "/status";
        Map<String, String> statusPayload = new HashMap<>();
        statusPayload.put("status", "IN_PRODUCTION");
        HttpEntity<Map<String, String>> statusRequest = new HttpEntity<>(statusPayload, headers);
        ResponseEntity<Order> statusResp = restTemplate.exchange(statusUrl, HttpMethod.PUT, statusRequest, Order.class);
        System.out.println("Order status update response: status=" + statusResp.getStatusCode() + ", body=" + statusResp.getBody());
        assertEquals(HttpStatus.OK, statusResp.getStatusCode());
        assertEquals(Order.Status.IN_PRODUCTION, statusResp.getBody().getStatus());

        // 4. Order tracking info
        Map<String, String> trackingPayload = new HashMap<>();
        trackingPayload.put("trackingId", "TRACK123");
        HttpEntity<Map<String, String>> trackingRequest = new HttpEntity<>(trackingPayload, headers);
        restTemplate.exchange(statusUrl, HttpMethod.PUT, trackingRequest, Order.class);
        ResponseEntity<Map> trackingResp = restTemplate.exchange(statusUrl, HttpMethod.GET, new HttpEntity<>(headers), Map.class);
        System.out.println("Order tracking info response: status=" + trackingResp.getStatusCode() + ", body=" + trackingResp.getBody());
        assertEquals(HttpStatus.OK, trackingResp.getStatusCode());
        assertTrue(trackingResp.getBody().containsKey("trackingId"));
        assertEquals("TRACK123", trackingResp.getBody().get("trackingId"));

        // 5. Order history fetch (by user)
        String historyUrl = "http://localhost:" + port + "/api/orders/user";
        ResponseEntity<Order[]> historyResp = restTemplate.exchange(historyUrl, HttpMethod.GET, new HttpEntity<>(headers), Order[].class);
        System.out.println("Order history response: status=" + historyResp.getStatusCode() + ", body=" + Arrays.toString(historyResp.getBody()));
        assertEquals(HttpStatus.OK, historyResp.getStatusCode());
        assertTrue(Arrays.stream(historyResp.getBody()).anyMatch(o -> o.getId().equals(createdOrder.getId())));
    }
}

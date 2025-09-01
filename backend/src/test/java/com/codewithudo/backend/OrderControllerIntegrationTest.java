package com.codewithudo.backend;

import com.codewithudo.backend.models.*;
import com.codewithudo.backend.repositories.*;
import com.codewithudo.backend.services.PaystackService;
import com.codewithudo.backend.util.JwtTestUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import java.math.BigDecimal;
import java.util.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderControllerIntegrationTest {
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
    private CartRepository cartRepository;
    @MockBean
    private PaystackService paystackService;

    private User buyer;
    private Artwork artwork;
    private String token;

    @BeforeEach
    void setup() {
        orderRepository.deleteAll();
        cartRepository.deleteAll();
        artworkRepository.deleteAll();
        userRepository.deleteAll();
        buyer = new User();
        buyer.setName("Test Buyer");
        buyer.setEmail("buyer@example.com");
        buyer.setPasswordHash("password");
        buyer.setRole(User.Role.CUSTOMER);
        userRepository.save(buyer);
        artwork = new Artwork();
        artwork.setTitle("Test Artwork");
        artwork.setDescription("Desc");
        artwork.setPrice(BigDecimal.valueOf(100));
        artwork.setImageUrl("http://example.com/image.jpg");
        artwork.setCategory("Painting");
        artwork.setArtist(buyer); // For test simplicity
        artworkRepository.save(artwork);
        token = JwtTestUtil.generateToken(buyer.getEmail());
    }

    @Test
    void testCheckoutProcess() {
        // Mock PaystackService to always return a successful verification
        PaystackVerificationResponse.PaystackTransactionData data = new PaystackVerificationResponse.PaystackTransactionData();
        data.setStatus("success");
        data.setAmount(10000); // 100.00 in Naira (Paystack returns kobo)
        PaystackVerificationResponse response = new PaystackVerificationResponse();
        response.setStatus(true);
        response.setData(data);
        Mockito.when(paystackService.verifyTransaction(Mockito.anyString())).thenReturn(response);

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
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
        assertEquals(buyer.getEmail(), responseEntity.getBody().getCustomerEmail());
        assertEquals(1, responseEntity.getBody().getArtworks().size());
    }

    @Test
    void testOrderDetailsFetchById() {
        // Mock PaystackService to always return a successful verification
        PaystackVerificationResponse.PaystackTransactionData data = new PaystackVerificationResponse.PaystackTransactionData();
        data.setStatus("success");
        data.setAmount(10000); // 100.00 in Naira (Paystack returns kobo)
        PaystackVerificationResponse paystackResponse = new PaystackVerificationResponse();
        paystackResponse.setStatus(true);
        paystackResponse.setData(data);
        Mockito.when(paystackService.verifyTransaction(Mockito.anyString())).thenReturn(paystackResponse);

        // 1. Create order
        String url = "http://localhost:" + port + "/api/orders";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        CheckoutRequest req = new CheckoutRequest();
        req.setPaymentReference("test-ref");
        req.setShippingAddress("123 Test St");
        req.setArtworkIds(List.of(artwork.getId()));
        HttpEntity<CheckoutRequest> request = new HttpEntity<>(req, headers);
        ResponseEntity<Order> createResponse = restTemplate.postForEntity(url, request, Order.class);
        assertEquals(HttpStatus.CREATED, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody());
        String orderId = createResponse.getBody().getId().toString();

        // 2. Fetch order details by ID
        String detailsUrl = "http://localhost:" + port + "/api/orders/" + orderId;
        HttpEntity<Void> getRequest = new HttpEntity<>(headers);
        ResponseEntity<Order> detailsResponse = restTemplate.exchange(detailsUrl, HttpMethod.GET, getRequest, Order.class);
        assertEquals(HttpStatus.OK, detailsResponse.getStatusCode());
        assertNotNull(detailsResponse.getBody());
        assertEquals(orderId, detailsResponse.getBody().getId().toString());
        assertEquals(buyer.getEmail(), detailsResponse.getBody().getCustomerEmail());
    }

    @Test
    void testOrderTrackingInfo() {
        // Mock PaystackService to always return a successful verification
        PaystackVerificationResponse.PaystackTransactionData data = new PaystackVerificationResponse.PaystackTransactionData();
        data.setStatus("success");
        data.setAmount(10000); // 100.00 in Naira (Paystack returns kobo)
        PaystackVerificationResponse paystackResponse = new PaystackVerificationResponse();
        paystackResponse.setStatus(true);
        paystackResponse.setData(data);
        Mockito.when(paystackService.verifyTransaction(Mockito.anyString())).thenReturn(paystackResponse);

        // 1. Create order
        String url = "http://localhost:" + port + "/api/orders";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        CheckoutRequest req = new CheckoutRequest();
        req.setPaymentReference("test-ref");
        req.setShippingAddress("123 Test St");
        req.setArtworkIds(List.of(artwork.getId()));
        HttpEntity<CheckoutRequest> request = new HttpEntity<>(req, headers);
        ResponseEntity<Order> createResponse = restTemplate.postForEntity(url, request, Order.class);
        assertEquals(HttpStatus.CREATED, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody());
        String orderId = createResponse.getBody().getId().toString();

        // 2. Fetch order tracking info
        String trackingUrl = "http://localhost:" + port + "/api/orders/" + orderId + "/status";
        HttpEntity<Void> getRequest = new HttpEntity<>(headers);
        ResponseEntity<Map> trackingResponse = restTemplate.exchange(trackingUrl, HttpMethod.GET, getRequest, Map.class);
        assertEquals(HttpStatus.OK, trackingResponse.getStatusCode());
        assertNotNull(trackingResponse.getBody());
        assertTrue(trackingResponse.getBody().containsKey("status"));
    }
}

package com.codewithudo.backend;

import com.codewithudo.backend.models.Payout;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.PayoutRepository;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.models.Order;
import com.codewithudo.backend.models.Artwork;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import com.codewithudo.backend.util.JwtTestUtil;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArtistEarningsPayoutsAuthIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PayoutRepository payoutRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ArtworkRepository artworkRepository;

    private User artist;
    private User customer;
    private Artwork artwork;
    private Order order;

    @BeforeEach
    void setup() {
        payoutRepository.deleteAll();
        orderRepository.deleteAll();
        artworkRepository.deleteAll();
        userRepository.deleteAll();

        artist = new User();
        artist.setName("Test Artist");
        artist.setEmail("artist@example.com");
        artist.setPasswordHash("password");
        artist.setRole(User.Role.ARTIST);
        userRepository.save(artist);

        customer = new User();
        customer.setName("Test Customer");
        customer.setEmail("customer@example.com");
        customer.setPasswordHash("password");
        customer.setRole(User.Role.CUSTOMER);
        userRepository.save(customer);

        artwork = new Artwork();
        artwork.setTitle("Test Artwork");
        artwork.setDescription("A test artwork");
        artwork.setPrice(new java.math.BigDecimal("1000"));
        artwork.setImageUrl("http://example.com/image.jpg");
        artwork.setCategory("painting");
        artwork.setArtist(artist);
        artworkRepository.save(artwork);

        order = new Order();
        order.setCustomer(customer);
        order.setCustomerEmail(customer.getEmail());
        order.setShippingAddress("123 Test St");
        order.setTotalAmount(new java.math.BigDecimal("1000"));
        order.setPaymentReference("payref123");
        order.setStatus(Order.Status.DELIVERED);
        order.setArtworks(java.util.Collections.singletonList(artwork));
        orderRepository.save(order);
    }

    @Test
    void testGetArtistEarnings_Authorized() {
        String token = JwtTestUtil.generateToken(artist.getEmail());
        String url = "http://localhost:" + port + "/api/payouts/artist/earnings";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
        // Should be 200 OK (empty earnings)
        org.junit.jupiter.api.Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetArtistPayouts_Authorized() {
        String token = JwtTestUtil.generateToken(artist.getEmail());
        String url = "http://localhost:" + port + "/api/payouts/artist";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
        // Should be 200 OK (empty payouts)
        org.junit.jupiter.api.Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testRequestPayout_Authorized() {
        String token = JwtTestUtil.generateToken(artist.getEmail());
        String url = "http://localhost:" + port + "/api/payouts/artist/request";
    Payout payout = new Payout();
    payout.setAmount(new java.math.BigDecimal("1000"));
    payout.setStatus(Payout.Status.PENDING);
    payout.setOrder(order);
    HttpHeaders headers = new HttpHeaders();
    headers.setBearerAuth(token);
    headers.setContentType(MediaType.APPLICATION_JSON);
    HttpEntity<Payout> request = new HttpEntity<>(payout, headers);
    ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
    // Should be 201 CREATED
    org.junit.jupiter.api.Assertions.assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }
}

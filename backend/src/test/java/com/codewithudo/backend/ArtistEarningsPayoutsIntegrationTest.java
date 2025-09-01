package com.codewithudo.backend;

import com.codewithudo.backend.models.Payout;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.PayoutRepository;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import java.math.BigDecimal;
import java.util.UUID;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArtistEarningsPayoutsIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PayoutRepository payoutRepository;

    @Autowired
    private ArtworkRepository artworkRepository;

    @Autowired
    private OrderRepository orderRepository;

    private User artist;

    @BeforeEach
    void setup() {
        payoutRepository.deleteAll();
        orderRepository.deleteAll(); // Delete orders first to clear order_artworks join table
        artworkRepository.deleteAll();
        userRepository.deleteAll();
        artist = new User();
        artist.setName("Test Artist");
        artist.setEmail("artist@example.com");
        artist.setPasswordHash("password");
        artist.setRole(User.Role.ARTIST);
        userRepository.save(artist);
    }

    @Test
    void testGetArtistEarnings_Unauthorized() {
        String url = "http://localhost:" + port + "/api/payouts/artist/earnings";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        Assertions.assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void testGetArtistPayouts_Unauthorized() {
        String url = "http://localhost:" + port + "/api/payouts/artist";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        Assertions.assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void testRequestPayout_Unauthorized() {
        String url = "http://localhost:" + port + "/api/payouts/artist/request";
        Payout payout = new Payout();
        payout.setAmount(BigDecimal.valueOf(1000));
        payout.setStatus(Payout.Status.PENDING);
        payout.setId(UUID.randomUUID());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Payout> request = new HttpEntity<>(payout, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
        Assertions.assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }
}

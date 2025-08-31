package com.codewithudo.backend;

import com.codewithudo.backend.models.Order;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArtistOrdersIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    private User artist;

    @BeforeEach
    void setup() {
        orderRepository.deleteAll();
        userRepository.deleteAll();
        artist = new User();
        artist.setEmail("artist@example.com");
    artist.setName("Test Artist");
    artist.setPasswordHash("password");
    artist.setRole(User.Role.ARTIST);
        userRepository.save(artist);
    }

    @Test
    void testGetOrdersForArtist_Unauthorized() {
        String url = "http://localhost:" + port + "/api/orders/artist";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        Assertions.assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    // Additional tests for authorized access and data can be added when JWT/auth is mocked
}

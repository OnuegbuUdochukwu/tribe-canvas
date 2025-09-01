package com.codewithudo.backend;

import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.util.JwtTokenUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional(propagation = Propagation.NOT_SUPPORTED)
public class OrderUserEndpointMinimalTest {
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

    private String token;
    private User buyer;

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
        token = jwtTokenUtil.generateToken(buyer.getEmail());
    }

    @Test
    void testGetOrdersForUser_Authenticated() {
        String url = "http://localhost:" + port + "/api/orders/user";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Should return 200 OK for authenticated user");
    }
}

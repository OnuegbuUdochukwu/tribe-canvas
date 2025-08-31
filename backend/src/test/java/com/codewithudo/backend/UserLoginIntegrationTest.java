package com.codewithudo.backend;

import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserLoginIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    private final String testEmail = "loginintegration@example.com";
    private final String testPassword = "loginpassword";

    @BeforeEach
    void setup() {
    // Clean up and create a user for login
    userRepository.findByEmail(testEmail).ifPresent(userRepository::delete);
    User user = new User();
    user.setName("Login Integration User");
    user.setEmail(testEmail);
    // Store password as BCrypt hash to match production logic
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    user.setPasswordHash(encoder.encode(testPassword));
    user.setRole(User.Role.CUSTOMER);
    userRepository.save(user);
    }

    @Test
    void testUserLoginEndpoint() {
        String url = "http://localhost:" + port + "/api/users/login";
        String body = String.format("{\"email\":\"%s\",\"password\":\"%s\"}", testEmail, testPassword);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
    Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    Assertions.assertNotNull(response.getBody());
    Assertions.assertFalse(response.getBody().isEmpty(), "JWT token should not be empty");
    }
}

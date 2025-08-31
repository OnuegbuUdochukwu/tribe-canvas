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
public class JwtTokenValidationIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    private final String testEmail = "jwtintegration@example.com";
    private final String testPassword = "jwtpassword";

    @BeforeEach
    void setup() {
        userRepository.findByEmail(testEmail).ifPresent(userRepository::delete);
        User user = new User();
        user.setName("JWT Integration User");
        user.setEmail(testEmail);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPasswordHash(encoder.encode(testPassword));
        user.setRole(User.Role.CUSTOMER);
        userRepository.save(user);
    }

    @Test
    void testJwtTokenValidation() {
        // 1. Login to get JWT token
        String loginUrl = "http://localhost:" + port + "/api/users/login";
        String loginBody = String.format("{\"email\":\"%s\",\"password\":\"%s\"}", testEmail, testPassword);
        HttpHeaders loginHeaders = new HttpHeaders();
        loginHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> loginRequest = new HttpEntity<>(loginBody, loginHeaders);
        ResponseEntity<String> loginResponse = restTemplate.postForEntity(loginUrl, loginRequest, String.class);
        Assertions.assertEquals(HttpStatus.OK, loginResponse.getStatusCode());
        String jwt = loginResponse.getBody();
        Assertions.assertNotNull(jwt);
        Assertions.assertFalse(jwt.isEmpty(), "JWT token should not be empty");

        // 2. Use JWT token to access a protected endpoint (e.g., /api/users/me)
        String meUrl = "http://localhost:" + port + "/api/users/me";
        HttpHeaders authHeaders = new HttpHeaders();
        authHeaders.setBearerAuth(jwt);
        HttpEntity<Void> meRequest = new HttpEntity<>(authHeaders);
        ResponseEntity<String> meResponse = restTemplate.exchange(meUrl, HttpMethod.GET, meRequest, String.class);
        Assertions.assertEquals(HttpStatus.OK, meResponse.getStatusCode());
        Assertions.assertTrue(meResponse.getBody() != null && meResponse.getBody().contains(testEmail));
    }
}

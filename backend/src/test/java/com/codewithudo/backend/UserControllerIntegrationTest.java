package com.codewithudo.backend;

import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Test
    void testUserRegistrationEndpoint() {
    String url = "http://localhost:" + port + "/api/users/register";
    String testEmail = "integration@example.com";
    // Clean up any existing user with this email
    userRepository.findByEmail(testEmail).ifPresent(userRepository::delete);

    User user = new User();
    user.setName("Integration User");
    user.setEmail(testEmail);
    user.setPasswordHash("integrationpassword");
    user.setRole(User.Role.CUSTOMER);

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    HttpEntity<User> request = new HttpEntity<>(user, headers);

    ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
    Assertions.assertEquals(HttpStatus.CREATED, response.getStatusCode());
    User saved = userRepository.findByEmail(testEmail).orElse(null);
    Assertions.assertNotNull(saved);
    Assertions.assertEquals("Integration User", saved.getName());
    }
}

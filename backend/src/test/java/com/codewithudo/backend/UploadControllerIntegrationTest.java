package com.codewithudo.backend;

import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.util.JwtTestUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import java.io.IOException;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UploadControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    private User artist;
    private String token;

    @Autowired
    private com.codewithudo.backend.repositories.ArtworkRepository artworkRepository;

    @MockBean
    private com.codewithudo.backend.services.S3Service s3Service;

    @BeforeEach
    void setup() {
        artworkRepository.deleteAll();
        userRepository.deleteAll();
        artist = new User();
        artist.setName("Test Artist");
        artist.setEmail("artist@example.com");
        artist.setPasswordHash("password");
        artist.setRole(User.Role.ARTIST);
        userRepository.save(artist);
        token = JwtTestUtil.generateToken(artist.getEmail());
    }

    @Test
    void testImageUpload() throws IOException {
        // Mock S3Service to return a dummy URL
        org.mockito.Mockito.when(s3Service.uploadFile(org.mockito.Mockito.any())).thenReturn("https://dummy-bucket.s3.amazonaws.com/test-image.jpg");
        String url = "http://localhost:" + port + "/api/upload";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", new ClassPathResource("test-image.jpg"));

        HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(body, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("url"));
    }
}

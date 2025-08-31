package com.codewithudo.backend;

import com.codewithudo.backend.models.Artist;
import com.codewithudo.backend.repositories.ArtistRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.UUID;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArtistControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ArtistRepository artistRepository;

    private UUID artistId;

    @BeforeEach
    void setup() {
        artistRepository.deleteAll();
    }

    @Test
    void testArtistRegistrationAndProfileFetchUpdate() {
        // Register artist
        String registerUrl = "http://localhost:" + port + "/api/artists/register";
        Artist artist = new Artist();
        artist.setName("Test Artist");
        artist.setBio("Test bio");
        artist.setPayoutDetails("bank-account-123");
        artist.setProfilePicUrl("http://example.com/pic.jpg");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Artist> request = new HttpEntity<>(artist, headers);
        ResponseEntity<Artist> response = restTemplate.postForEntity(registerUrl, request, Artist.class);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
        Artist saved = response.getBody();
        Assertions.assertNotNull(saved);
        Assertions.assertNotNull(saved.getId());
        artistId = saved.getId();

        // Fetch artist profile
        String fetchUrl = "http://localhost:" + port + "/api/artists/" + artistId;
        ResponseEntity<Artist> fetchResponse = restTemplate.getForEntity(fetchUrl, Artist.class);
        Assertions.assertEquals(HttpStatus.OK, fetchResponse.getStatusCode());
        Artist fetched = fetchResponse.getBody();
        Assertions.assertNotNull(fetched);
        Assertions.assertEquals("Test Artist", fetched.getName());

        // Update artist profile
        fetched.setBio("Updated bio");
        fetched.setPayoutDetails("updated-bank-account");
        fetched.setProfilePicUrl("http://example.com/updated.jpg");
        fetched.setName("Updated Artist");
        HttpEntity<Artist> updateRequest = new HttpEntity<>(fetched, headers);
        ResponseEntity<Artist> updateResponse = restTemplate.exchange(fetchUrl, HttpMethod.PUT, updateRequest, Artist.class);
        Assertions.assertEquals(HttpStatus.OK, updateResponse.getStatusCode());
        Artist updated = updateResponse.getBody();
        Assertions.assertNotNull(updated);
        Assertions.assertEquals("Updated bio", updated.getBio());
        Assertions.assertEquals("updated-bank-account", updated.getPayoutDetails());
        Assertions.assertEquals("http://example.com/updated.jpg", updated.getProfilePicUrl());
        Assertions.assertEquals("Updated Artist", updated.getName());
    }
}

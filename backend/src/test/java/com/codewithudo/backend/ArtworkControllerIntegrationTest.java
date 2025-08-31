package com.codewithudo.backend;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.PayoutRepository;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.util.JwtTestUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ArtworkControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArtworkRepository artworkRepository;

    private User artist;
    private String token;
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PayoutRepository payoutRepository;

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
        token = JwtTestUtil.generateToken(artist.getEmail());
    }

    @Test
    void testArtworkCreation() {
        String url = "http://localhost:" + port + "/api/artworks";
        Artwork artwork = new Artwork();
        artwork.setTitle("Test Artwork");
        artwork.setDescription("A test artwork");
        artwork.setPrice(new BigDecimal("1000"));
        artwork.setImageUrl("http://example.com/image.jpg");
        artwork.setCategory("painting");
        artwork.setArtist(artist);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Artwork> request = new HttpEntity<>(artwork, headers);
        ResponseEntity<Artwork> response = restTemplate.postForEntity(url, request, Artwork.class);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Test Artwork", response.getBody().getTitle());
    }

    @Test
    void testArtworkUpdate() {
        Artwork artwork = new Artwork();
        artwork.setTitle("Old Title");
        artwork.setDescription("Old desc");
        artwork.setPrice(new BigDecimal("500"));
        artwork.setImageUrl("http://example.com/old.jpg");
        artwork.setCategory("drawing");
        artwork.setArtist(artist);
        artworkRepository.save(artwork);
        String url = "http://localhost:" + port + "/api/artworks/" + artwork.getId();
        artwork.setTitle("New Title");
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Artwork> request = new HttpEntity<>(artwork, headers);
        ResponseEntity<Artwork> response = restTemplate.exchange(url, HttpMethod.PUT, request, Artwork.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("New Title", response.getBody().getTitle());
    }

    @Test
    void testArtworkDeletion() {
        Artwork artwork = new Artwork();
        artwork.setTitle("Delete Me");
        artwork.setDescription("desc");
        artwork.setPrice(new BigDecimal("200"));
        artwork.setImageUrl("http://example.com/del.jpg");
        artwork.setCategory("sculpture");
        artwork.setArtist(artist);
        artworkRepository.save(artwork);
        String url = "http://localhost:" + port + "/api/artworks/" + artwork.getId();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<Void> response = restTemplate.exchange(url, HttpMethod.DELETE, request, Void.class);
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertFalse(artworkRepository.findById(artwork.getId()).isPresent());
    }

    @Test
    void testArtworkListingAll() {
        Artwork artwork1 = new Artwork();
        artwork1.setTitle("A1");
        artwork1.setDescription("desc1");
        artwork1.setPrice(new BigDecimal("100"));
        artwork1.setImageUrl("url1");
        artwork1.setCategory("cat1");
        artwork1.setArtist(artist);
        artworkRepository.save(artwork1);
        Artwork artwork2 = new Artwork();
        artwork2.setTitle("A2");
        artwork2.setDescription("desc2");
        artwork2.setPrice(new BigDecimal("200"));
        artwork2.setImageUrl("url2");
        artwork2.setCategory("cat2");
        artwork2.setArtist(artist);
        artworkRepository.save(artwork2);
        String url = "http://localhost:" + port + "/api/artworks";
        ResponseEntity<Artwork[]> response = restTemplate.getForEntity(url, Artwork[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().length >= 2);
    }

    @Test
    void testArtworkListingByArtist() {
        Artwork artwork = new Artwork();
        artwork.setTitle("Artist's Art");
        artwork.setDescription("desc");
        artwork.setPrice(new BigDecimal("300"));
        artwork.setImageUrl("url");
        artwork.setCategory("cat");
        artwork.setArtist(artist);
        artworkRepository.save(artwork);
        String url = "http://localhost:" + port + "/api/artworks/artist/" + artist.getId();
        ResponseEntity<Artwork[]> response = restTemplate.getForEntity(url, Artwork[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().length >= 1);
    }

    @Test
    void testArtworkListingByCategory() {
        Artwork artwork = new Artwork();
        artwork.setTitle("Cat Art");
        artwork.setDescription("desc");
        artwork.setPrice(new BigDecimal("400"));
        artwork.setImageUrl("url");
        artwork.setCategory("special");
        artwork.setArtist(artist);
        artworkRepository.save(artwork);
        String url = "http://localhost:" + port + "/api/artworks/category/special";
        ResponseEntity<Artwork[]> response = restTemplate.getForEntity(url, Artwork[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().length >= 1);
    }
}

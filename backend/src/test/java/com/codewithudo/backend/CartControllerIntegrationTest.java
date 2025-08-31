package com.codewithudo.backend;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.models.Cart;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.CartRepository;
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
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CartControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ArtworkRepository artworkRepository;
    @Autowired
    private CartRepository cartRepository;

    private User buyer;
    private Artwork artwork;
    private String token;

    @BeforeEach
    void setup() {
        cartRepository.deleteAll();
        artworkRepository.deleteAll();
        userRepository.deleteAll();
        buyer = new User();
        buyer.setName("Test Buyer");
        buyer.setEmail("buyer@example.com");
        buyer.setPasswordHash("password");
    buyer.setRole(User.Role.CUSTOMER);
        userRepository.save(buyer);
        artwork = new Artwork();
        artwork.setTitle("Test Artwork");
        artwork.setDescription("Desc");
        artwork.setPrice(BigDecimal.valueOf(100));
        artwork.setImageUrl("http://example.com/image.jpg");
        artwork.setCategory("Painting");
        artwork.setArtist(buyer); // For test simplicity
        artworkRepository.save(artwork);
        token = JwtTestUtil.generateToken(buyer.getEmail());
    }

    @Test
    void testAddToCart() {
        String url = "http://localhost:" + port + "/api/cart/add/" + artwork.getId();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<Cart> response = restTemplate.postForEntity(url, request, Cart.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertFalse(response.getBody().getArtworks().isEmpty());
    }

    @Test
    void testRemoveFromCart() {
        // Add first
        Cart cart = new Cart();
        cart.setUser(buyer);
        cart.setArtworks(new java.util.ArrayList<>());
        cart.getArtworks().add(artwork);
        cartRepository.save(cart);
        String url = "http://localhost:" + port + "/api/cart/remove/" + artwork.getId();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<Cart> response = restTemplate.postForEntity(url, request, Cart.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().getArtworks().isEmpty());
    }

    @Test
    void testViewCartContents() {
        // Add first
        Cart cart = new Cart();
        cart.setUser(buyer);
        cart.setArtworks(new java.util.ArrayList<>());
        cart.getArtworks().add(artwork);
        cartRepository.save(cart);
        String url = "http://localhost:" + port + "/api/cart";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<Cart> response = restTemplate.exchange(url, HttpMethod.GET, request, Cart.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertFalse(response.getBody().getArtworks().isEmpty());
    }
}

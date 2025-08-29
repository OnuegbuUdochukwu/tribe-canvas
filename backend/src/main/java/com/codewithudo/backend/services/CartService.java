package com.codewithudo.backend.services;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.models.Cart;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.CartRepository;
import com.codewithudo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ArtworkRepository artworkRepository;

    public Optional<Cart> getCartByUserId(UUID userId) {
        return userRepository.findById(userId).flatMap(cartRepository::findByUser);
    }

    public Cart addToCart(UUID userId, UUID artworkId) {
        User user = userRepository.findById(userId).orElseThrow();
        Artwork artwork = artworkRepository.findById(artworkId).orElseThrow();
        Cart cart = cartRepository.findByUser(user).orElseGet(() -> {
            Cart c = new Cart();
            c.setUser(user);
            c.setArtworks(new java.util.ArrayList<>());
            return c;
        });
        if (!cart.getArtworks().contains(artwork)) {
            cart.getArtworks().add(artwork);
        }
        return cartRepository.save(cart);
    }

    public Cart removeFromCart(UUID userId, UUID artworkId) {
        User user = userRepository.findById(userId).orElseThrow();
        Artwork artwork = artworkRepository.findById(artworkId).orElseThrow();
        Cart cart = cartRepository.findByUser(user).orElseThrow();
        cart.getArtworks().remove(artwork);
        return cartRepository.save(cart);
    }

    public void clearCart(UUID userId) {
        User user = userRepository.findById(userId).orElseThrow();
        Cart cart = cartRepository.findByUser(user).orElseThrow();
        cart.getArtworks().clear();
        cartRepository.save(cart);
    }
}

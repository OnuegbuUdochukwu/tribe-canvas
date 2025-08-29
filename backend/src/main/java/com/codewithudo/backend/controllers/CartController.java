package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.Cart;
import com.codewithudo.backend.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    // Get current user's cart
    @GetMapping
    public ResponseEntity<Cart> getCart() {
        UUID userId = getCurrentUserId();
        Optional<Cart> cart = cartService.getCartByUserId(userId);
        return cart.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Add artwork to cart
    @PostMapping("/add/{artworkId}")
    public ResponseEntity<Cart> addToCart(@PathVariable UUID artworkId) {
        UUID userId = getCurrentUserId();
        Cart cart = cartService.addToCart(userId, artworkId);
        return ResponseEntity.ok(cart);
    }

    // Remove artwork from cart
    @PostMapping("/remove/{artworkId}")
    public ResponseEntity<Cart> removeFromCart(@PathVariable UUID artworkId) {
        UUID userId = getCurrentUserId();
        Cart cart = cartService.removeFromCart(userId, artworkId);
        return ResponseEntity.ok(cart);
    }

    // Clear cart
    @PostMapping("/clear")
    public ResponseEntity<Void> clearCart() {
        UUID userId = getCurrentUserId();
        cartService.clearCart(userId);
        return ResponseEntity.ok().build();
    }

    // Helper to get current user ID from security context (assumes principal is email)
    private UUID getCurrentUserId() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        // ...fetch user by email and return ID...
        // This is a placeholder; you may want to inject UserRepository here for real lookup
        return null;
    }
}

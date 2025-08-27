package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.*;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.services.PaystackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArtworkRepository artworkRepository;

    @Autowired
    private PaystackService paystackService;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody CheckoutRequest request) {
        try {
            // Step 1: Verify the payment with Paystack
            PaystackVerificationResponse verification = paystackService.verifyTransaction(request.getPaymentReference());

            if (verification == null || !verification.isStatus() || !verification.getData().getStatus().equals("success")) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }

            // Step 2: Get customer details from authenticated user
            String customerEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            User customer = userRepository.findByEmail(customerEmail).orElseThrow();

            // Step 3: Get artworks from the request
            List<Artwork> artworks = artworkRepository.findAllById(request.getArtworkIds());
            if (artworks.size() != request.getArtworkIds().size()) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

            // Step 4: Calculate total amount and verify with payment
            BigDecimal totalAmount = artworks.stream()
                    .map(Artwork::getPrice)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal paidAmount = new BigDecimal(verification.getData().getAmount()).divide(new BigDecimal(100)); // Paystack returns amount in kobo

            if (totalAmount.compareTo(paidAmount) != 0) {
                // This is a critical check to prevent fraud
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }

            // Step 5: Create and save the new order
            Order newOrder = new Order();
            newOrder.setCustomer(customer);
            newOrder.setCustomerEmail(customerEmail);
            newOrder.setShippingAddress(request.getShippingAddress());
            newOrder.setTotalAmount(totalAmount);
            newOrder.setPaymentReference(request.getPaymentReference());
            newOrder.setArtworks(artworks);

            Order savedOrder = orderRepository.save(newOrder);

            return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.*;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.UserRepository;
import com.codewithudo.backend.services.PaystackService;
import com.codewithudo.backend.services.FulfillmentPartnerService;
import com.codewithudo.backend.models.FulfillmentPartner;
import com.codewithudo.backend.util.WebhookUtil;
import com.codewithudo.backend.payload.FulfillmentWebhookPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    // Get all orders for the authenticated artist
    @GetMapping("/artist")
    public ResponseEntity<List<Order>> getOrdersForArtist() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User artist = userRepository.findByEmail(email).orElseThrow();
        List<Order> orders = orderRepository.findByArtworks_Artist(artist);
        return ResponseEntity.ok(orders);
    }

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArtworkRepository artworkRepository;

    @Autowired
    private PaystackService paystackService;

    @Autowired
    private FulfillmentPartnerService fulfillmentPartnerService;

    @Autowired
    private WebhookUtil webhookUtil;

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

            // Step 6: Trigger webhook to fulfillment partner
            List<FulfillmentPartner> partners = fulfillmentPartnerService.getAllPartners();
            if (!partners.isEmpty()) {
                FulfillmentPartner partner = partners.get(0); // For now, pick the first partner
                FulfillmentWebhookPayload payload = new FulfillmentWebhookPayload(partner.getId(), savedOrder);
                webhookUtil.sendWebhook(partner.getWebhookUrl(), payload);
            }

            return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get order status and trackingId by order ID (for buyer)
    @GetMapping("/{orderId}/status")
    public ResponseEntity<?> getOrderStatus(@PathVariable("orderId") String orderId) {
        try {
            java.util.UUID uuid = java.util.UUID.fromString(orderId);
            Optional<Order> orderOpt = orderRepository.findById(uuid);
            if (orderOpt.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            Order order = orderOpt.get();
            return ResponseEntity.ok(new java.util.HashMap<String, Object>() {{
                put("status", order.getStatus());
                put("trackingId", order.getTrackingId());
            }});
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Update order status and trackingId (for fulfillment partner/admin)
    @PutMapping("/{orderId}/status")
    public ResponseEntity<Order> updateOrderStatusAndTracking(@PathVariable("orderId") String orderId, @RequestBody java.util.Map<String, String> payload) {
        try {
            java.util.UUID uuid = java.util.UUID.fromString(orderId);
            Optional<Order> orderOpt = orderRepository.findById(uuid);
            if (orderOpt.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            Order order = orderOpt.get();
            if (payload.containsKey("status")) {
                order.setStatus(Order.Status.valueOf(payload.get("status").toUpperCase()));
            }
            if (payload.containsKey("trackingId")) {
                order.setTrackingId(payload.get("trackingId"));
            }
            Order updatedOrder = orderRepository.save(order);
            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

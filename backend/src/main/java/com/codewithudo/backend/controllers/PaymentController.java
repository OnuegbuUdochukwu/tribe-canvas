package com.codewithudo.backend.controllers;

import com.codewithudo.backend.services.PaystackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaystackService paystackService;

    @GetMapping("/verify/{reference}")
    public ResponseEntity<?> verifyPayment(@PathVariable String reference) {
        var result = paystackService.verifyTransaction(reference);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(500).body("Verification failed");
        }
    }
}

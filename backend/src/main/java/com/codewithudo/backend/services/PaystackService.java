package com.codewithudo.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.codewithudo.backend.config.PaystackConfig;
import com.codewithudo.backend.models.PaystackVerificationResponse;

@Service
public class PaystackService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PaystackConfig paystackConfig;

    private static final String PAYSTACK_VERIFY_URL = "https://api.paystack.co/transaction/verify/";

    public PaystackVerificationResponse verifyTransaction(String reference) {
        String verifyUrl = PAYSTACK_VERIFY_URL + reference;

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + paystackConfig.getPaystackSecretKey());
        headers.set("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        try {
            ResponseEntity<PaystackVerificationResponse> response = restTemplate.exchange(
                verifyUrl,
                HttpMethod.GET,
                entity,
                PaystackVerificationResponse.class
            );
            return response.getBody();
        } catch (Exception e) {
            // Handle exceptions appropriately
            return null;
        }
    }
}
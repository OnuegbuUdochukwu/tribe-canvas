package com.codewithudo.backend.models;

import lombok.Data;

@Data
public class PaystackVerificationResponse {
    private boolean status;
    private String message;
    private PaystackTransactionData data;

    @Data
    public static class PaystackTransactionData {
        private String id;
        private String reference;
        private String status;
        private String currency;
        private int amount;
        private String gatewayResponse;
        private PaystackCustomer customer;
    }

    @Data
    public static class PaystackCustomer {
        private String email;
    }
}
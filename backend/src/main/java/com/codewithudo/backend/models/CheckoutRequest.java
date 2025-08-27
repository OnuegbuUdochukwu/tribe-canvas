package com.codewithudo.backend.models;

import lombok.Data;
import java.util.List;
import java.util.UUID;

@Data
public class CheckoutRequest {
    private String paymentReference;
    private String shippingAddress;
    private List<UUID> artworkIds;
}

package com.codewithudo.backend.payload;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.models.Order;
import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class FulfillmentWebhookPayload {
    private Long fulfillmentPartnerId;
    private String orderId;
    private String customerEmail;
    private String shippingAddress;
    private BigDecimal totalAmount;
    private List<Artwork> artworks;

    public FulfillmentWebhookPayload(Long fulfillmentPartnerId, Order order) {
        this.fulfillmentPartnerId = fulfillmentPartnerId;
        this.orderId = order.getId().toString();
        this.customerEmail = order.getCustomerEmail();
        this.shippingAddress = order.getShippingAddress();
        this.totalAmount = order.getTotalAmount();
        this.artworks = order.getArtworks();
    }
}

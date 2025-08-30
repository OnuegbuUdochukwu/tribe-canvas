package com.codewithudo.backend.models;

import jakarta.persistence.*;

@Entity
public class FulfillmentPartner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String webhookUrl;
    private String contactEmail;
    private String phone;

    // Constructors
    public FulfillmentPartner() {}

    public FulfillmentPartner(String name, String webhookUrl, String contactEmail, String phone) {
        this.name = name;
        this.webhookUrl = webhookUrl;
        this.contactEmail = contactEmail;
        this.phone = phone;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getWebhookUrl() { return webhookUrl; }
    public void setWebhookUrl(String webhookUrl) { this.webhookUrl = webhookUrl; }

    public String getContactEmail() { return contactEmail; }
    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}

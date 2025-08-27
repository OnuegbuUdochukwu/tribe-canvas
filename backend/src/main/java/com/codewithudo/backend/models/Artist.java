package com.codewithudo.backend.models;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String bio;
    private String profilePicUrl;
    private String payoutDetails;

    // Getters and setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    public String getProfilePicUrl() { return profilePicUrl; }
    public void setProfilePicUrl(String profilePicUrl) { this.profilePicUrl = profilePicUrl; }
    public String getPayoutDetails() { return payoutDetails; }
    public void setPayoutDetails(String payoutDetails) { this.payoutDetails = payoutDetails; }
}

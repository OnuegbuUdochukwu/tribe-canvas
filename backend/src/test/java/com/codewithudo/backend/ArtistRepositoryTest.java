package com.codewithudo.backend;

import com.codewithudo.backend.models.Artist;
import com.codewithudo.backend.repositories.ArtistRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class ArtistRepositoryTest {
    @Autowired
    private ArtistRepository artistRepository;

    @Test
    void testArtistRegistration() {
        Artist artist = new Artist();
        artist.setName("Test Artist");
        artist.setBio("Test bio");
        artist.setPayoutDetails("bank-account-123");
        artist.setProfilePicUrl("http://example.com/pic.jpg");
        Artist saved = artistRepository.save(artist);
        Assertions.assertNotNull(saved.getId());
        Assertions.assertEquals("Test Artist", saved.getName());
        Assertions.assertEquals("Test bio", saved.getBio());
        Assertions.assertEquals("bank-account-123", saved.getPayoutDetails());
        Assertions.assertEquals("http://example.com/pic.jpg", saved.getProfilePicUrl());
    }
}

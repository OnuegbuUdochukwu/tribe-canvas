package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.Artist;
import com.codewithudo.backend.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/artists")
public class ArtistController {
    @Autowired
    private ArtistService artistService;

    // Registration endpoint (basic email-based for now)
    @PostMapping("/register")
    public ResponseEntity<Artist> registerArtist(@RequestBody Artist artist) {
        Artist saved = artistService.saveArtist(artist);
        return ResponseEntity.ok(saved);
    }

    // Login endpoint (stub, to be replaced with real auth)
    @PostMapping("/login")
    public ResponseEntity<String> loginArtist(@RequestBody Artist artist) {
        // Stub: In real app, validate credentials and return JWT
        Optional<Artist> found = artistService.getAllArtists().stream()
                .filter(a -> a.getName().equals(artist.getName()))
                .findFirst();
        if (found.isPresent()) {
            return ResponseEntity.ok("Login successful (stub)");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}

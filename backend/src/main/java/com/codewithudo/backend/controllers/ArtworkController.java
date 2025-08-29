package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.ArtworkRepository;
import com.codewithudo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/artworks")
public class ArtworkController {

    @Autowired
    private ArtworkRepository artworkRepository;

    @Autowired
    private UserRepository userRepository;

    // PUBLIC ENDPOINTS

    @GetMapping
    public List<Artwork> getAllArtworks(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tag,
            @RequestParam(required = false) String dimensions,
            @RequestParam(required = false) UUID artistId
    ) {
        if (title != null && !title.isEmpty()) {
            return artworkRepository.findByTitleContainingIgnoreCase(title);
        }
        if (category != null && !category.isEmpty()) {
            return artworkRepository.findByCategory(category);
        }
        if (tag != null && !tag.isEmpty()) {
            return artworkRepository.findByTagsContainingIgnoreCase(tag);
        }
        if (dimensions != null && !dimensions.isEmpty()) {
            return artworkRepository.findByDimensionsContainingIgnoreCase(dimensions);
        }
        if (artistId != null) {
            return artworkRepository.findByArtist_Id(artistId);
        }
        return artworkRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Artwork> getArtworkById(@PathVariable UUID id) {
        return artworkRepository.findById(id)
                .map(artwork -> ResponseEntity.ok().body(artwork))
                .orElse(ResponseEntity.notFound().build()); // Corrected line
    }

    // PROTECTED ENDPOINTS (ARTIST ROLE REQUIRED)

    @PostMapping
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<Artwork> createArtwork(@RequestBody Artwork artwork) {
        try {
            String artistEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            User artist = userRepository.findByEmail(artistEmail).orElseThrow();

            artwork.setArtist(artist);
            artwork.setCreatedAt(java.time.LocalDateTime.now());

            Artwork savedArtwork = artworkRepository.save(artwork);
            return ResponseEntity.created(new URI("/api/artworks/" + savedArtwork.getId())).body(savedArtwork);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<Artwork> updateArtwork(@PathVariable UUID id, @RequestBody Artwork artworkDetails) {
        return artworkRepository.findById(id)
                .map(artwork -> {
                    String artistEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                    if (!artwork.getArtist().getEmail().equals(artistEmail)) {
                        return new ResponseEntity<Artwork>(HttpStatus.FORBIDDEN);
                    }

                    artwork.setTitle(artworkDetails.getTitle());
                    artwork.setDescription(artworkDetails.getDescription());
                    artwork.setPrice(artworkDetails.getPrice());
                    artwork.setCategory(artworkDetails.getCategory());

                    Artwork updatedArtwork = artworkRepository.save(artwork);
                    return ResponseEntity.ok(updatedArtwork);
                })
                .orElse(ResponseEntity.notFound().build()); // Corrected line
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<Void> deleteArtwork(@PathVariable UUID id) {
        return artworkRepository.findById(id)
                .map(artwork -> {
                    String artistEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                    if (!artwork.getArtist().getEmail().equals(artistEmail)) {
                        return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
                    }

                    artworkRepository.delete(artwork);
                    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
                })
                .orElse(ResponseEntity.notFound().build()); // Corrected line
    }
}
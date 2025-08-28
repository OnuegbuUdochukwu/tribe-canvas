package com.codewithudo.backend.services;

import com.codewithudo.backend.models.Artwork;
import com.codewithudo.backend.repositories.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ArtworkService {
    @Autowired
    private ArtworkRepository artworkRepository;

    public List<Artwork> getAllArtworks() {
        return artworkRepository.findAll();
    }

    public Optional<Artwork> getArtworkById(UUID id) {
        return artworkRepository.findById(id);
    }

    public Artwork saveArtwork(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

    public void deleteArtwork(UUID id) {
        artworkRepository.deleteById(id);
    }
}

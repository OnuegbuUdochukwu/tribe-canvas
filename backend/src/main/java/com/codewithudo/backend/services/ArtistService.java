package com.codewithudo.backend.services;

import com.codewithudo.backend.models.Artist;
import com.codewithudo.backend.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ArtistService {
    @Autowired
    private ArtistRepository artistRepository;

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Optional<Artist> getArtistById(UUID id) {
        return artistRepository.findById(id);
    }

    public Artist saveArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    public void deleteArtist(UUID id) {
        artistRepository.deleteById(id);
    }
}

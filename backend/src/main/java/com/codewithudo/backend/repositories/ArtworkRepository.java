package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, UUID> {


    // Custom query to find all artworks by a specific artist
    List<Artwork> findByArtist_Id(UUID artistId);

    // Custom query to find all artworks of a specific category
    List<Artwork> findByCategory(String category);

    // Custom query to find artworks by title (case-insensitive search)
    List<Artwork> findByTitleContainingIgnoreCase(String title);

    // Custom query to find artworks by tags (comma-separated, case-insensitive)
    List<Artwork> findByTagsContainingIgnoreCase(String tag);

    // Custom query to find artworks by dimensions (exact match or partial)
    List<Artwork> findByDimensionsContainingIgnoreCase(String dimensions);

}

package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ArtistRepository extends JpaRepository<Artist, UUID> {
    // Custom queries if needed
}

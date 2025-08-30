package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Payout;
import com.codewithudo.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PayoutRepository extends JpaRepository<Payout, UUID> {
    List<Payout> findByArtist(User artist);
}

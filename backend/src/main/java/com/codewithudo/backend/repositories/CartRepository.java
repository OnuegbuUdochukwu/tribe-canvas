package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Cart;
import com.codewithudo.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
    Optional<Cart> findByUser(User user);
}

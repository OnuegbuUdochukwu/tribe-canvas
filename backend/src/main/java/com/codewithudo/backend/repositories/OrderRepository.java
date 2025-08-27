package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    // We can add custom query methods here later if needed,
    // for example, to find an order by its payment reference.
}
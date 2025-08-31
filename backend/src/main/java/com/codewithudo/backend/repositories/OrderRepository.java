package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.Order;
import com.codewithudo.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    java.util.List<Order> findByCustomer(User customer);

    java.util.List<Order> findByArtworks_Artist(User artist);
}
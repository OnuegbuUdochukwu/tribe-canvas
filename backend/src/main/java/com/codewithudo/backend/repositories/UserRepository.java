package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    // Spring Data JPA will automatically generate the method implementation for us
    Optional<User> findByEmail(String email);

}
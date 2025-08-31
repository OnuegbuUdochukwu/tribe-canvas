package com.codewithudo.backend;

import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void testUserRegistration() {
        User user = new User();
        user.setName("Test User");
        user.setEmail("testuser@example.com");
        user.setPasswordHash("hashedpassword");
        user.setRole(User.Role.CUSTOMER);
        User saved = userRepository.save(user);
        Assertions.assertNotNull(saved.getId());
        Assertions.assertEquals("Test User", saved.getName());
        Assertions.assertEquals("testuser@example.com", saved.getEmail());
    }
}

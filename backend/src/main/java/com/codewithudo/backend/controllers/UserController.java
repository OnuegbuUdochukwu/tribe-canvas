package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.LoginRequest;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired // New Autowired field
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            // Check if user with this email already exists
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                return new ResponseEntity<>(null, HttpStatus.CONFLICT); // HTTP 409
            }

            // Hash the password before saving
            user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
            user.setRole(User.Role.CUSTOMER);
            User savedUser = userRepository.save(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.email());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.password(), user.getPasswordHash())) {
                // Password matches, generate and return JWT
                // JWT implementation will be in the next step
                return new ResponseEntity<>("User logged in successfully!", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Invalid credentials.", HttpStatus.UNAUTHORIZED);
    }
}
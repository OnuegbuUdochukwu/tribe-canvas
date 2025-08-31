package com.codewithudo.backend.services;

import com.codewithudo.backend.models.Order;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.OrderRepository;
import com.codewithudo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Order> getOrdersByBuyerId(UUID buyerId) {
        User buyer = userRepository.findById(buyerId).orElseThrow();
        return orderRepository.findByCustomer(buyer);
    }

    public Optional<Order> getOrderById(UUID orderId) {
        return orderRepository.findById(orderId);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}

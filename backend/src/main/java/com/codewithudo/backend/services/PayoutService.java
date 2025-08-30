package com.codewithudo.backend.services;

import com.codewithudo.backend.models.Payout;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.repositories.PayoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PayoutService {
    @Autowired
    private PayoutRepository payoutRepository;

    public List<Payout> getPayoutsByArtist(User artist) {
        return payoutRepository.findByArtist(artist);
    }

    public Optional<Payout> getPayoutById(UUID id) {
        return payoutRepository.findById(id);
    }

    public Payout savePayout(Payout payout) {
        return payoutRepository.save(payout);
    }

    public void deletePayout(UUID id) {
        payoutRepository.deleteById(id);
    }
}

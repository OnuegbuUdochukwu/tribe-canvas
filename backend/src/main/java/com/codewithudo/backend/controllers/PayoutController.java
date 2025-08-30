package com.codewithudo.backend.controllers;

import com.codewithudo.backend.models.Payout;
import com.codewithudo.backend.models.User;
import com.codewithudo.backend.services.PayoutService;
import com.codewithudo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/payouts")
public class PayoutController {
    @Autowired
    private PayoutService payoutService;
    @Autowired
    private UserRepository userRepository;

    // Get all payouts for the authenticated artist
    @GetMapping("/artist")
    public ResponseEntity<List<Payout>> getArtistPayouts() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User artist = userRepository.findByEmail(email).orElseThrow();
        List<Payout> payouts = payoutService.getPayoutsByArtist(artist);
        return ResponseEntity.ok(payouts);
    }

    // Get artist earnings summary (total paid + pending)
    @GetMapping("/artist/earnings")
    public ResponseEntity<BigDecimal> getArtistEarnings() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User artist = userRepository.findByEmail(email).orElseThrow();
        List<Payout> payouts = payoutService.getPayoutsByArtist(artist);
        BigDecimal total = payouts.stream()
            .filter(p -> p.getStatus() == Payout.Status.PAID || p.getStatus() == Payout.Status.PENDING)
            .map(Payout::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        return ResponseEntity.ok(total);
    }

    // Request a payout (artist triggers this)
    @PostMapping("/artist/request")
    public ResponseEntity<Payout> requestPayout(@RequestBody Payout payout) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User artist = userRepository.findByEmail(email).orElseThrow();
        payout.setArtist(artist);
        payout.setStatus(Payout.Status.PENDING);
        Payout saved = payoutService.savePayout(payout);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Get payout status by payout ID
    @GetMapping("/{payoutId}/status")
    public ResponseEntity<Payout.Status> getPayoutStatus(@PathVariable("payoutId") UUID payoutId) {
        Optional<Payout> payoutOpt = payoutService.getPayoutById(payoutId);
        return payoutOpt.map(p -> ResponseEntity.ok(p.getStatus()))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}

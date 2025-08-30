package com.codewithudo.backend.repositories;

import com.codewithudo.backend.models.FulfillmentPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FulfillmentPartnerRepository extends JpaRepository<FulfillmentPartner, Long> {
}

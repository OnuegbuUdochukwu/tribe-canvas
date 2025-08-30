package com.codewithudo.backend.services;

import com.codewithudo.backend.models.FulfillmentPartner;
import com.codewithudo.backend.repositories.FulfillmentPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FulfillmentPartnerService {

    private final FulfillmentPartnerRepository fulfillmentPartnerRepository;

    @Autowired
    public FulfillmentPartnerService(FulfillmentPartnerRepository fulfillmentPartnerRepository) {
        this.fulfillmentPartnerRepository = fulfillmentPartnerRepository;
    }

    public List<FulfillmentPartner> getAllPartners() {
        return fulfillmentPartnerRepository.findAll();
    }

    public Optional<FulfillmentPartner> getPartnerById(Long id) {
        return fulfillmentPartnerRepository.findById(id);
    }

    public FulfillmentPartner savePartner(FulfillmentPartner partner) {
        return fulfillmentPartnerRepository.save(partner);
    }

    public void deletePartner(Long id) {
        fulfillmentPartnerRepository.deleteById(id);
    }
}

package com.numerator.covid.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.numerator.covid.repository.PatientRepository;

@Service
public class StateService {
    private final PatientRepository patientRepository;

    @Autowired
    public StateService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }


    public Set<Object> getAllStates() {
        return this.patientRepository.getAllStates();
    }
}

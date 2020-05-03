package com.numerator.covid.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.numerator.covid.repository.PatientRepository;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Object[]> getCountsByDate(String state) {
        return this.patientRepository.getCountsByDate(state);
    }

    public List<Object[]> getCountsByRange(String state) {
        return this.patientRepository.getCountsByRange(state);
    }
}

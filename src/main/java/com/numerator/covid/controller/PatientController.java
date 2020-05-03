package com.numerator.covid.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.numerator.covid.service.PatientService;

@RestController
@RequestMapping("/api/patient")
public class PatientController {
    private static final Logger LOG = LoggerFactory.getLogger(PatientController.class);

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }


    @GetMapping("/getcountsbydate")
    public List<Object[]> getCountsByDate(@RequestParam(defaultValue = "") String state) {
        LOG.info("request recieved to get getCountsByDate");
        LOG.info("State: {}", state);
        return this.patientService.getCountsByDate(state);
    }

    @GetMapping("/getcountsbyrange")
    public List<Object[]> getCountsByRange(@RequestParam(defaultValue = "") String state) {
        LOG.info("request recieved to get getCountsByDate");
        LOG.info("State: {}", state);
        return this.patientService.getCountsByRange(state);
    }
}

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
@RequestMapping("/patientdata")
public class PatientController {
    private static final Logger LOG = LoggerFactory.getLogger(PatientController.class);

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }


    @GetMapping("/getcountsbydate")
    public List<Object[]> getCountsByDate(@RequestParam(defaultValue = "") String state, @RequestParam(defaultValue = "0") Integer days) {
        return this.patientService.getCountsByDate(state, days);
    }

    @GetMapping("/getcountsbyrange")
    public List<Object[]> getCountsByDate(@RequestParam(defaultValue = "") String state) {
        return this.patientService.getCountsByRange(state);
    }
}

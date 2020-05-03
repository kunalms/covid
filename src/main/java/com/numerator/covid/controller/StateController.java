package com.numerator.covid.controller;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.numerator.covid.service.StateService;

@RestController
@RequestMapping("/api/state")
public class StateController {

    private static final Logger LOG = LoggerFactory.getLogger(StateController.class);

    private final StateService stateService;

    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }


    @GetMapping("/all")
    public Set<Object> getStates() {
        LOG.info("request recieved to get all states");
        return this.stateService.getAllStates();
    }
}

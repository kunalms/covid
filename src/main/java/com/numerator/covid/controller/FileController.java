package com.numerator.covid.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.numerator.covid.service.FileProcessorService;

@RestController
@RequestMapping("/file")
public class FileController {

    private static final Logger LOG = LoggerFactory.getLogger(FileController.class);

    private final FileProcessorService fileProcessorService;

    @Autowired
    public FileController(FileProcessorService fileProcessorService) {
        this.fileProcessorService = fileProcessorService;
    }

    @GetMapping("/process/{fileCount}")
    public void fileListOne(@PathVariable Integer fileCount) throws Exception {
        LOG.info("Request recieved to process {} files", fileCount);
        this.fileProcessorService.processFiles(fileCount);
    }
}

package com.numerator.covid.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.numerator.covid.config.FileConfig;
import com.numerator.covid.model.Patient;
import com.numerator.covid.repository.PatientRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

@Service
public class FileProcessorService {

    private static final Logger LOG = LoggerFactory.getLogger(FileProcessorService.class);

    private final FileConfig fileConfig;
    private final PatientRepository patientRepository;

    @Autowired
    FileProcessorService(FileConfig fileConfig, PatientRepository patientRepository) {
        this.fileConfig = fileConfig;
        this.patientRepository = patientRepository;
    }

    public void processFiles(Integer fileCount) throws Exception {
        LOG.info("Request received to fetch {} files.", fileCount);
        fetchFiles(fileCount);
        LOG.info("Request to fetch {} files was successful.", fileCount);
        LOG.info("Starting the processing of the fetched files.");
        List<Patient> patientList = getCsvPatientList(fileCount);
        LOG.info("The processing of the fetched files. was sucessfull. {} records were found", patientList.size());
        this.patientRepository.saveAll(patientList);
        LOG.info("Persisted {} records successfully.", patientList.size());
    }

    public List<Patient> getCsvPatientList(Integer fileCount) throws Exception {
        List<Patient> patientList = new ArrayList<>();
        for (int i = 1; i <= fileCount; i++) {
            String currentFileName = this.fileConfig.getFileName() + i + this.fileConfig.getFileExtension();
            LOG.info("Starting the processing for file {}", currentFileName);
            File currentFile = new File(this.fileConfig.getUploadDirectory(), currentFileName);

            Reader reader = new BufferedReader(new InputStreamReader(new FileInputStream(currentFile)));

            CsvToBean csvToBean = new CsvToBeanBuilder(reader)
                    .withType(Patient.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .build();

            LOG.info("processing for file {} was successful.", currentFileName);
            patientList.addAll(csvToBean.parse());
        }
        return patientList;
    }

    private void fetchFiles(Integer count) throws IOException {
        for (int i = 1; i <= count; i++) {
            String fileName = this.fileConfig.getFileName() + i + this.fileConfig.getFileExtension();
            LOG.info("Starting to fetch file {}", fileName);
            FileUtils.copyURLToFile(
                    new URL(this.fileConfig.getRawDataBaseUrl() + fileName),
                    new File(this.fileConfig.getUploadDirectory(), fileName));
            LOG.info("File {} fetched successfully.", fileName);
        }
    }
}

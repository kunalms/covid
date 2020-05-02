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
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.numerator.covid.config.FileConfig;
import com.numerator.covid.model.Patient;
import com.numerator.covid.repository.PatientRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

@Service
public class FileProcessorService {

    private final FileConfig fileConfig;
    private final PatientRepository patientRepository;

    @Autowired
    FileProcessorService(FileConfig fileConfig, PatientRepository patientRepository) {
        this.fileConfig = fileConfig;
        this.patientRepository = patientRepository;
    }

    public void processFiles(Integer fileCount) throws Exception {
        fetchFiles(fileCount);
        List<Patient> patientList = getCsvPatientList(fileCount);
        this.patientRepository.saveAll(patientList);

        List<Patient> emptyUpadatedDatePatients = patientList
                .stream()
                .filter(patient -> patient.getLastStatusUpdated().equals(""))
                .collect(Collectors.toList());

        System.out.println(patientList.size());
        System.out.println(emptyUpadatedDatePatients.size());

    }

    private void persistData() {

    }

    public List<Patient> getCsvPatientList(Integer fileCount) throws Exception {
        List<Patient> patientList = new ArrayList<>();
        for (int i = 1; i <= fileCount; i++) {
            String currentFileName = this.fileConfig.getFileName() + i + this.fileConfig.getFileExtension();
            File currentFile = new File(this.fileConfig.getUploadDirectory(), currentFileName);

            Reader reader = new BufferedReader(new InputStreamReader(new FileInputStream(currentFile)));

            CsvToBean csvToBean = new CsvToBeanBuilder(reader)
                    .withType(Patient.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .build();

            patientList.addAll(csvToBean.parse());
        }
        return patientList;
    }

    private void fetchFiles(Integer count) throws IOException {
        for (int i = 1; i <= count; i++) {
            String fileName = this.fileConfig.getFileName() + i + this.fileConfig.getFileExtension();
            FileUtils.copyURLToFile(
                    new URL(this.fileConfig.getRawDataBaseUrl() + fileName),
                    new File(this.fileConfig.getUploadDirectory(), fileName));
        }
    }
}

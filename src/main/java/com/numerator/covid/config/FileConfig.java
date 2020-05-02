package com.numerator.covid.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "files")
public class FileConfig {

    // Default values. Can be overriden using the properties file
    private String uploadDirectory = "uploads";
    private String rawDataBaseUrl = "https://api.covid19india.org/csv/latest/";
    private String fileName = "raw_data";
    private String fileExtension = ".csv";

    public String getUploadDirectory() {
        return uploadDirectory;
    }

    public void setUploadDirectory(String uploadDirectory) {
        this.uploadDirectory = uploadDirectory;
    }

    public String getRawDataBaseUrl() {
        return rawDataBaseUrl;
    }

    public void setRawDataBaseUrl(String rawDataBaseUrl) {
        this.rawDataBaseUrl = rawDataBaseUrl;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileExtension() {
        return fileExtension;
    }

    public void setFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
    }
}

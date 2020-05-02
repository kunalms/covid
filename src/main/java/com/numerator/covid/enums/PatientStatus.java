package com.numerator.covid.enums;

public enum PatientStatus {
    RECOVERED("Recovered"),
    HOSPITALIZED("Hospitalized"),
    DECEASED("Deceased"),
    MIGRATED("Migrated"),
    UNCLASSIFIED("");

    private String status;

    PatientStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
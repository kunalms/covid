package com.numerator.covid.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.opencsv.bean.CsvBindByName;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @CsvBindByName(column = "Patient Number")
    @Column(name = "original_id")
    private long patientNumber;

    @CsvBindByName(column = "Date Announced")
    private String dateAnnounced;

    @CsvBindByName(column = "Detected State")
    private String stateName;

    @CsvBindByName(column = "State code")
    private String stateCode;

    @CsvBindByName(column = "Current Status")
    private String status;

    @CsvBindByName(column = "Status Change Date")
    private String lastStatusUpdated;

    @CsvBindByName(column = "Age Bracket")
    private String age;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getPatientNumber() {
        return patientNumber;
    }

    public void setPatientNumber(long patientNumber) {
        this.patientNumber = patientNumber;
    }

    public String getDateAnnounced() {
        return dateAnnounced;
    }

    public void setDateAnnounced(String dateAnnounced) {
        this.dateAnnounced = dateAnnounced;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getStateCode() {
        return stateCode;
    }

    public void setStateCode(String stateCode) {
        this.stateCode = stateCode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLastStatusUpdated() {
        return lastStatusUpdated;
    }

    public void setLastStatusUpdated(String lastStatusUpdated) {
        this.lastStatusUpdated = lastStatusUpdated;
    }
}

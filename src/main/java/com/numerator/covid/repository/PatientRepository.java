package com.numerator.covid.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.numerator.covid.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long>, PatientCustomRepository {

}

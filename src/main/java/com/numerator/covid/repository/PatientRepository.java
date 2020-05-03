package com.numerator.covid.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.numerator.covid.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long>, PatientCustomRepository {

    @Query("SELECT NEW map(p.stateCode as code, p.stateName as name) from Patient p where p.stateName != '' and p.stateCode != '' order by p.stateName")
    Set<Object> getAllStates();
}

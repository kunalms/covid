package com.numerator.covid.repository;

import java.util.List;


public interface PatientCustomRepository {
    List<Object[]> getCountsByDate(String state, Integer days);

    List<Object[]> getCountsByRange(String state);
}

package com.numerator.covid.repository;

import java.util.List;


public interface PatientCustomRepository {
    List<Object[]> getCountsByDate(String state);

    List<Object[]> getCountsByRange(String state);
}

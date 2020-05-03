package com.numerator.covid.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.numerator.covid.model.Patient;

public class PatientCustomRepositoryImpl implements PatientCustomRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Object[]> getCountsByDate(String state) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        CriteriaQuery<Object[]> query = cb.createQuery(Object[].class);
        Root<Patient> patientRoot = query.from(Patient.class);

        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.isNotNull(patientRoot.get("dateAnnounced")));
        predicates.add(cb.notEqual(patientRoot.get("dateAnnounced"), cb.literal("")));

        if (!state.equals("")) {
            predicates.add(cb.equal(patientRoot.get("stateCode"), state));
        }

        query.multiselect(patientRoot.get("dateAnnounced"), cb.count(patientRoot))
                .where((cb.and(predicates.toArray(new Predicate[0]))))
                .groupBy(patientRoot.get("dateAnnounced"))
                .orderBy(cb.asc(cb.function("STR_TO_DATE", String.class, patientRoot.get("dateAnnounced"), cb.literal("%d/%m/%Y"))));

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<Object[]> getCountsByRange(String state) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        CriteriaQuery<Object[]> query = cb.createQuery(Object[].class);
        Root<Patient> patientRoot = query.from(Patient.class);

        List<Predicate> predicates = new ArrayList<>();

        if (!state.equals("")) {
            predicates.add(cb.equal(patientRoot.get("stateCode"), state));
        }


        query.multiselect(cb.selectCase()
                .when(cb.between(patientRoot.get("age"), 1, 20), "0-20")
                .when(cb.between(patientRoot.get("age"), 21, 40), "21-40")
                .when(cb.between(patientRoot.get("age"), 41, 60), "41-60")
                .when(cb.between(patientRoot.get("age"), 61, 80), "61-80")
                .when(cb.between(patientRoot.get("age"), 81, 100), "81-100")
                .otherwise("unclassified"), cb.count(patientRoot))
                .where((cb.and(predicates.toArray(new Predicate[0]))))
                .groupBy(cb.selectCase()
                        .when(cb.between(patientRoot.get("age"), 1, 20), "0-20")
                        .when(cb.between(patientRoot.get("age"), 21, 40), "21-40")
                        .when(cb.between(patientRoot.get("age"), 41, 60), "41-60")
                        .when(cb.between(patientRoot.get("age"), 61, 80), "61-80")
                        .when(cb.between(patientRoot.get("age"), 81, 100), "81-100")
                        .otherwise("unclassified"));

        return entityManager.createQuery(query).getResultList();
    }
}

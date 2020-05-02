package com.numerator.covid.model;

import java.util.Objects;

public class State {

    private long id;

    private String code;

    private String name;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof State)) return false;
        State state = (State) o;
        return getId() == state.getId() &&
                getCode().equals(state.getCode()) &&
                getName().equals(state.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getCode(), getName());
    }
}

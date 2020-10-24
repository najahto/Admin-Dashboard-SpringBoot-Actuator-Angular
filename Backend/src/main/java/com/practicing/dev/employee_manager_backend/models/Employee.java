package com.practicing.dev.employee_manager_backend.models;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;

    @Column(nullable = false,updatable = false)
    private String employeeCode;

    private String name;

    private String email;

    private String jobTitle;

    private String phone;

    private String image;

}

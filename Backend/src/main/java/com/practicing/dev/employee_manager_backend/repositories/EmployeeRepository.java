package com.practicing.dev.employee_manager_backend.repositories;

import com.practicing.dev.employee_manager_backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    Optional<Employee> findEmployeeById(Long id);
    List<Employee> findEmployeeByNameContaining(String name);
}

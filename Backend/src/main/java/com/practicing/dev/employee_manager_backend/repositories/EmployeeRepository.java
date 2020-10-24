package com.practicing.dev.employee_manager_backend.repositories;

import com.practicing.dev.employee_manager_backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


}

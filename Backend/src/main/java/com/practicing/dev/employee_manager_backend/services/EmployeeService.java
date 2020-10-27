package com.practicing.dev.employee_manager_backend.services;

import com.practicing.dev.employee_manager_backend.exceptions.UserNotFoundException;
import com.practicing.dev.employee_manager_backend.models.Employee;
import com.practicing.dev.employee_manager_backend.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id){
        return employeeRepository.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("user by id"+id+"was not found"));
    }

    public void deleteEmployee(Long id){
         employeeRepository.deleteById(id);
    }



}

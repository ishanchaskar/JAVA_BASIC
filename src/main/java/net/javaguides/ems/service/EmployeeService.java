package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(long id);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(long id ,EmployeeDto updatedEmployee);
    void deleteEmployee(long id);
}

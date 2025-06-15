package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto maptoEmployeeDto(Employee employee) {
        return new EmployeeDto(
          employee.getEmpId(),
          employee.getEmpName(),
                employee.getEmpEmail(),
                employee.getEmpSurname()
        );
    }

    public static Employee maptoEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getEmpId(),
                employeeDto.getEmpSurname(),
                employeeDto.getEmpEmail(),
                employeeDto.getEmpName()
        );
    }
}

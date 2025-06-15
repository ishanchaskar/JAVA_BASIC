package net.javaguides.ems.dto;
// its a middleware
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeDto {
    private long empId;

    private String empName;

    private String empSurname;

    private String empEmail;
}

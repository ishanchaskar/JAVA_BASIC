package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long empId;
@Column(name = "first_name")
private String empName;
@Column(name = "last_name")
private String empSurname;
@Column(name = "email_id",nullable = false,unique = true)
private String empEmail;
}

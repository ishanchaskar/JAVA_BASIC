import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployes } from '../service/EmployeeService';
// import { response } from 'express';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
  const[employee,setEmployee] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
   getAllEmployees()
  }, [])
function getAllEmployees(){
   listEmployes().then((response) => {
        setEmployee(response.data);
    }).catch(error => {
        console.error(error);
    })
}

  function removeEmployee(empId){
    console.log(empId);
    deleteEmployee(empId).then((response) => {
      getAllEmployees()
      console.log(response.data)
    }).catch(error => {
      console.error(error);
    })
  }
  function addEmployee(){
    navigator('/add-employee')
  }
  function updateEmployee(empId){
navigator(`/employees/edit-employee/${empId}`);
  }
  
  return (
    <>
    
    <div className='container'></div>
    <h2 className='text-center'>ListEmployeeComponent</h2>
    <button className='btn btn-primary mb-2' onClick={addEmployee}>Add Employee</button>
    <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee firstName</th>
                <th>Employee lastName</th>
                <th>Employee email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employee.map(employee => 
                <tr key={employee.empId}>
                    <td>{employee.empId}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.empSurname}</td>
                    <td>{employee.empEmail}</td>
                    <td>
                      <button className='btn btn-info' onClick={() => updateEmployee(employee.empId)}>Update</button>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={() => removeEmployee(employee.empId)}>Delete</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
    </>
  )
}

export default ListEmployeeComponent
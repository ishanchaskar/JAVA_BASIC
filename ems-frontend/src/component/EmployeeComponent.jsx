import React, {useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService';
// import { response } from 'express';
import {useNavigate , useParams} from 'react-router-dom';
import { useEffect } from 'react';
// import { response } from 'express';

const EmployeeComponent = () => {
  const[empName , setEmpName] = useState('');
  const[empSurname , setempSurname] = useState('');
  const[empEmail , setempEmail] = useState('');
const navigator = useNavigate();
const { id } = useParams();
const[error,setError] = useState({
  'empName' : '',
  'empSurname': '',
  'empEmail' : ''
})
  function handleFirstName(e){
    setEmpName(e.target.value);
  }

    function handleLastName(e){
    setempSurname(e.target.value);
  }

  function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validateForm()){

    const employee = {empName , empSurname , empEmail}

    if(id){
      updateEmployee(id , employee).then((response) => {
        console.log(response.data)
        navigator('/employees')
      }).catch(error => {
        console.error(error);
      });
    }else{
createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees')
    }).catch(error => {
        console.error(error);
      });
    // console.log(employee);
    }
  }
    }
    
  
  function validateForm(){
    let valid = true;
    const errorsCopy = {... error}
    if(empName.trim()){
      errorsCopy.empName = '';
    }else{
      errorsCopy.empName = 'First name is required';
      valid = false;
    }
    if(empSurname.trim()){
      errorsCopy.empSurname = '';
    }else{
      errorsCopy.empSurname = 'last name is required';
      valid = false;
    }
    if(empEmail.trim()){
      errorsCopy.empEmail = '';
    }else{
      errorsCopy.empEmail = 'email is required';
      valid = false;
    }
    setError(errorsCopy);
    return valid;
  }

  function Pagetitle(){
    if(id){
      return           <h2 className="text-center">update employee</h2>

    }else{
      return           <h2 className="text-center">add employee</h2>

    }
  }

  useEffect(() => {
    if(id){
      getEmployee(id).then((response) => {
setEmpName(response.data.empName);
setempSurname(response.data.empSurname);
setempEmail(response.data.empEmail);
      }).catch(error =>  {console.log(error)} )

    }
  }, [id]);

  return (
    <div className='container'>
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
{Pagetitle()}
          <div className="card-body">
            <form >

              <div className="form-group mb-2">
                <label className="form-label">first name</label>
                <input type="text" placeholder='enter employee first name' 
                name='empName' value={empName} className={`form-control ${error.empName ? 'is-invalid' : ''}`}
                onChange={handleFirstName} />
                {error.empName && <div className='invalid-feedback'>{error.empName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">last name</label>
                <input type="text" placeholder='enter employee last name' 
                name='empSurname' value={empSurname} className={`form-control ${error.empSurname ? 'is-invalid' : ''}`}
                onChange={handleLastName} />
                                {error.empSurname && <div className='invalid-feedback'>{error.empSurname}</div>}

              </div>

              <div className="form-group mb-2">
                <label className="form-label">email</label>
                <input type="email" placeholder='enter employee email' 
                name='empEmail' value={empEmail} className={`form-control ${error.empEmail ? 'is-invalid' : ''}`}
                onChange={(e) => setempEmail(e.target.value)} />
                 {error.empEmail && <div className='invalid-feedback'>{error.empEmail}</div>}
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
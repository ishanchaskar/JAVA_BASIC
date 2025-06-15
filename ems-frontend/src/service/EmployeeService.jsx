import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/employees";

export function listEmployes() {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export function createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export function getEmployee(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
}

export function updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}

export function deleteEmployee(id, employee) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}


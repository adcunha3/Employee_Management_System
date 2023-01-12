import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

function ListEmployee() {

    const navigate = useNavigate();
    const {id} = useParams();

    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/employees').then((res) => {
            console.log(res.data);
            setEmployees(res.data);
            // console.log(employees);
        });
    },[])

    const delete_employee = (id) => {
        axios.delete('http://localhost:8080/api/v1/employees/' + id).then((res) => {
            setEmployees({employees: employees.filter(employee => employee.id !== id)})
        })
    }

    const add_employee = () => {
        navigate('/add-employee')
    }

    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={add_employee}> Add Employee</button>
            </div>
            <br></br>
            <div className='row'>
                <table className='table table-striped table-bordered'>

                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employees) => {
                                return (
                                    <tr key={employees.id}>
                                    <td> {employees.firstName} </td>
                                    <td> {employees.lastName} </td>
                                    <td> {employees.emailId} </td>
                                    <td>
                                        <button onClick={ () => navigate('/update-employee/' + employees.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ (e) => {
                                            e.preventDefault()
                                            delete_employee(employees.id)
                                        }} className="btn btn-danger">Delete </button>
                                    </td>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployee;
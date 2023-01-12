import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function CreateEmployee() {

    const navigate = useNavigate();

    const [info, setInfo] = useState({firstName : "", lastName: "", emailId: ""})

    const add_employee = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/employees', {firstName: info.firstName, lastName : info.lastName, emailId: info.emailId}).then((res) => {
            console.log('employee added!')
            setInfo({});
            navigate('/employees')
        });
    }

    const close_tab = () => {
        navigate('/employees')
    }

    return (
        <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={info.firstName} onChange={(e) => setInfo({firstName: e.target.value})}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={info.lastName} onChange={(e) => setInfo({lastName: e.target.value})}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={info.emailId} onChange={(e) => setInfo({emailId: e.target.value})}/>
                                        </div>

                                        <button className="btn btn-success" onClick={add_employee}>Save</button>
                                        <button className="btn btn-danger" onClick={close_tab} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
        </div>
    )
}

export default CreateEmployee;
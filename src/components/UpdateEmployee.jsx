import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

function UpdateEmployee() {

    const navigate = useNavigate();
    const {id} = useParams();

    const [info, setInfo] = useState({id: id, firstName : "", lastName: "", emailId: ""})

    const update_employee = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/v1/employees/' + id, {firstName: info.firstName, lastName : info.lastName, emailId: info.emailId}).then((res) => {
            console.log('employee updated!')
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
                                <h3 className="text-center">Update Employee</h3>
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

                                        <button className="btn btn-success" onClick={update_employee}>Save</button>
                                        <button className="btn btn-danger" onClick={close_tab} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
        </div>
    )
}

export default UpdateEmployee;
import React, { useState } from "react";
import axios from 'axios';

function CreateUser(){
    const[first_name, setFirst_Name] = useState("");
    const[last_name, setLast_Name] = useState("")
    const[email, setEmail] = useState("")
    const[semester, setSemester] = useState("")
    const[campus, setCampus] = useState("")


      const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {first_name, last_name, email, semester, campus})
        .then(result => console.log(result))
        .catch(err =>console.log(err))
        
      };
    return(
        
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className="mb-2">
                    <label htmlFor="">First Name</label>
                    
                    <input type="first_name" placeholder="First Name Please" className="form-control"
                    onChange={(e) =>setFirst_Name(e.target.value)}/>
                    
                </div>
                <div className="mb-2">
                    <label htmlFor="">Last Name</label>
                    
                    <input type="last_name" placeholder="Last Name Please" className="form-control"
                    onChange={(e) =>setLast_Name(e.target.value)}/>
                    
                </div>
                
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    
                    <input type="email" placeholder="Email Please" className="form-control"
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                </div>
                <div className="mb-2">
                    <label htmlFor="">Semester</label>
                    
                    <input type="semester" placeholder="Semester Please" className="form-control"
                    onChange={(e) => setSemester(e.target.value)}/>
                    
                </div>
                <div className="mb-2">
                    <label htmlFor="">Campus</label>
                    
                    <input type="campus" placeholder="Campus Please" className="form-control"
                    onChange={(e) => setCampus(e.target.value)}/>
                    
                </div>
                <button className="btn btn-success">Submit</button>

            </form>
        </div>
      </div>
    )
}
export default CreateUser;
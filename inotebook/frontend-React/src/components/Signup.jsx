import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"", password:"",name:"",cpassword:""})
    let onChange =(e)=>{
        setCredentials({...credentials,[e.target.id] : e.target.value})
    }
    const handleSubmit=async (e)=>{
        const {name, email, password} = credentials;
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name,email,password})
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate('/');
            props.showAlert("Account created successfully","success")
        }
        else{
            props.showAlert("Invalide Credentials","danger")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" onChange={onChange}/>
    </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={onChange} required minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} required minLength={5}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Signup
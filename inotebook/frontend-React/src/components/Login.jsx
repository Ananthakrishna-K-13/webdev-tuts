import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"", password:""})

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate('/');
            props.showAlert(" Logged in successfully","success")
        }
        else{
            props.showAlert("Invalide Credentials","danger")
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name] : e.target.value})
    }
  return (
    <form className='container' onSubmit={handleSubmit} >
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" value={credentials.email} onChange={onChange} id="email " name='email' aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label htmlFor="password" class="form-label">Password</label>
            <input type="password" name='password' class="form-control" onChange={onChange} value={credentials.password} id="password"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login
import React from "react"
import './styles/LogInForm.css'
import Logo from "./../images/corner_logo.png";


export default  function LogInForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nickname: 'russak',
            password: '123'
        }

        fetch('http://localhost:5000/api/v1/player/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new data send');
        })
    }
      
    return (
    <div className="login-wrapper">
        <form className="login-form">
            <img className="login-form-img" src={Logo} alt="logo"></img>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="login-form-label" for="form2Example1">Nickname</label>
            </div>
            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="login-form-label" for="form2Example2">Password</label>
            </div>
        <button type="button" onClick={handleSubmit} class="btn btn-outline-warning btn-lg btn-block mb-4">Sign in</button>
        </form>
    </div>
        )
    }
    

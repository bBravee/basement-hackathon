
import './styles/LogInForm.css'
import Logo from "./../images/corner_logo.png";
import React, {useState, useEffect } from "react";


export default  function LogInForm() {

    const [form, setForm] = useState({nickname: '', password: ''});

    const handleNick = event => {
        const nickname = event.target.value;
        setForm({...form, nickname});
        
    }

    const handlePass = event => {
        const password = event.target.value;
        setForm({...form, password});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        

        fetch('http://localhost:5000/api/v1/player/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(() => {
            console.log('new data send');
        })
    }

      
    return (
    <div className="login-wrapper">
        <form className="login-form">
            <img className="login-form-img" src={Logo} alt="logo"></img>
            <div class="form-outline mb-4">
                <input onChange={handleNick} type="email" id="form2Example1" className="form-control" value={form.nickname}/>
                <label className="login-form-label" for="form2Example1">Nickname</label>
            </div>
            <div class="form-outline mb-4">
                <input onChange={handlePass} type="password" id="form2Example2" className="form-control" value={form.password}/>
                <label className="login-form-label" for="form2Example2">Password</label>
            </div>
        <button type="button" onClick={handleSubmit} class="btn btn-outline-warning btn-lg btn-block mb-4">Sign in</button>
        </form>
    </div>
        )
    }
    

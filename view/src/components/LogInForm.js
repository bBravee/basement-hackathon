
import './styles/LogInForm.css'
import Logo from "./../images/corner_logo.png";
import React, {useState } from "react";


export default  function LogInForm() {

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    var nickName = '';
    var pass = '';

    const handleNick = event => {
        const newValue = event.target.value;
        setNickname(newValue);
        console.log("Nick:" + newValue);
        nickName = newValue;
    }

    const handlePass = event => {
        const newValue = event.target.value;
        setPassword(newValue);
        console.log("Pass: " + newValue);
        pass = newValue;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nickname: nickName,
            password: pass
        }
        console.log(data);

        fetch('http://localhost:5000/api/v1/player/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new data send');
            console.log(data);
        })
    }
      
    return (
    <div className="login-wrapper">
        <form className="login-form">
            <img className="login-form-img" src={Logo} alt="logo"></img>
            <div class="form-outline mb-4">
                <input onChange={handleNick} type="email" id="form2Example1" className="form-control" value={nickname}/>
                <label className="login-form-label" for="form2Example1">Nickname</label>
            </div>
            <div class="form-outline mb-4">
                <input onChange={handlePass} type="password" id="form2Example2" className="form-control" value={password}/>
                <label className="login-form-label" for="form2Example2">Password</label>
            </div>
        <button type="button" onClick={handleSubmit} class="btn btn-outline-warning btn-lg btn-block mb-4">Sign in</button>
        </form>
    </div>
        )
    }
    

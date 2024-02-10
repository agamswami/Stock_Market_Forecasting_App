import React, { useState } from "react";
import ReactDOM from "react-dom";

import './Loginform.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function LoginForm(props) {
    const [action,setAction] = useState(props.type);
  return (
    <div className="container " >
        <div className="header">
        <div className="text">{(action === "Sign Up") ? "Sign Up" : "Login"}</div>
        <div className="underline mb-5"></div>
    </div>
    <form className="input">
        {(action === "Sign Up") ? <div className="input">
            <img className="me-2" src={user_icon} alt="" />
            <input className="mb-3" type="text" placeholder="Username"/>
        </div> : <div></div> }
        
        <div className="input">
            <img className="me-2" src={email_icon} alt="" />
            <input className="mb-3" type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img className="me-2" src={password_icon} alt="" />
            <input className="mb-3" type="password" placeholder="Password"/>
        </div>
        <div className="Submit-container">
            
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </form>
    </div>
  );
}

export default LoginForm;

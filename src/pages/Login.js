import React, { useState } from "react";
import ReactDOM from "react-dom";

import LoginForm from "../components/LoginForm/Loginform";
// backgroundImage: '../components/Assets/background.jpg'
function Login(props) {
  return (
    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/background2.jpg)`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <LoginForm type = {props.type}/>
    </div>
  );
}

export default Login;

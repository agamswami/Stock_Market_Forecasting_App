import React, { useState } from "react";
import ReactDOM from "react-dom";

import LoginForm from "../components/LoginForm/Loginform";

function Login(props) {
  return (
    <div>
        <LoginForm type = {props.type}/>
    </div>
  );
}

export default Login;

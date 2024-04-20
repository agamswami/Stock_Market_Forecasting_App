import React, { useState ,useContext} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import './Loginform.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { SymbolContext } from "../Context/SymbolState"
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
    const navigate = useNavigate();
    const [action,setAction] = useState(props.type);

    const {authFlag , setAuthFlag} = useContext(SymbolContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    function handleLoginClick(){
        if(action === "Login"){
            const handleSubmit = async (e) => {
                // e.preventDefault();
            
                try {
                  const response = await axios.post('http://localhost:4000/auth/login', {
                    email:email,
                    password:password
                  });
                  console.log("erer")
                  console.log(response.data);
                  console.log("helllooooo")
                  localStorage.setItem('token', response.data.token); 
                  setAuthFlag(response.data.authFlag);

                  if(response.data.authFlag === true){
                    navigate("/");
                  }

                } catch (error) {
                  console.log('Error in login:', error);
                }
              };
            handleSubmit();
            
        }
        else{
            setAction("Login");
        }
    }
    function handleSignUpClick(){
        if(action === "Sign Up"){
            const handleSubmit = async () => {
                console.log('hello');
                // e.preventDefault();
                try {
                  const response = await axios.post('http://localhost:4000/auth/register', {
                    
                    
                    username: username,
                    email:email,
                    password:password,
                    // confirmPassword:confirmPassword,
                    // profession:profession
                  
                  });
                  console.log(response.data);
                  console.log('raaa') // Handle response accordingly
                  setAuthFlag(response.data.authFlag);

                  if(response.data.authFlag === true){
                    navigate("/");
                  }
                } catch (error) {
                  console.log('Error:', error);
                }
            
            
                console.log('Username:', username);
                console.log('Email:', email);
                console.log('Password:', password);
                // console.log('Confirm Password:', confirmPassword);
                // console.log('Profession:', profession);
              };
            handleSubmit();
        }
        else{
            setAction("Sign Up");
        }
    }
  return (
    <div className="loginForm">
        <div className="container " >
            <div className="header">
                <div className="text">{(action === "Sign Up") ? "Sign Up" : "Login"}</div>
                <div className="underline mb-5"></div>
            </div>
            <form className="input">
                {(action === "Sign Up") ? <div className="input">
                    <img className="me-2" src={user_icon} alt="" />
                    <input className="mb-3" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </div> : <div></div> }
    
                <div className="input">
                    <img className="me-2" src={email_icon} alt="" />
                    <input className="mb-3" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img className="me-2" src={password_icon} alt="" />
                    <input className="mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="Submit-container">
    
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {handleSignUpClick() }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {handleLoginClick()}}>Login</div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginForm;

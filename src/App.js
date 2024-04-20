import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/DashBoard';
import Info from './pages/Info';
import { useState } from 'react';
import SymbolState from './components/Context/SymbolState';


function App() {
  const [symbol , setSymbol] = useState("meta");
  const [authFlag , setAuthFlag] = useState(false);
  return (
    <div className="App">
      <SymbolState data = {{symbol, setSymbol ,authFlag,setAuthFlag}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route home path = "/home" element={<Home type = "true"/>} />
            <Route  dashBoard path = "/dashBoard" element = {<Dashboard/>} />
            <Route  info path = "/info" element = {<Info/>} />
            <Route login path ="/login" element={<Login type = "Login"/>}/>
            <Route login path ="/signup" element={<Login type = "Sign Up"/>}/>
          </Routes>
        </BrowserRouter>
      </SymbolState>
    </div>
  );
}
export default App;

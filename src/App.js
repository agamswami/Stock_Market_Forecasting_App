import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route index path = "/index" element={<Index />} />
          <Route login path ="/login" element={<Login type = "Login"/>}/>
          <Route login path ="/signup" element={<Login type = "Sign Up"/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;

import React, { useState , useContext} from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import { SymbolContext } from "../components/Context/SymbolState.js"


// import Table from "../components/Table/Table.jsx"


function Home(props) {
  const {authFlag , setAuthFlag} = useContext(SymbolContext);
  if(props.type === "true"){
    setAuthFlag(true);
  }
    return (
      <div >
        <Navbar />
        <Hero />
        <Features />
        <Footer />
        {/* <Table /> */}
      </div>
    );
  }

export default Home;
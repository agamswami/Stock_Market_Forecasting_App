import React ,{useState}from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import UserIcon from "./UserIcon/UserIcon";
import {useContext} from "react";
import { SymbolContext } from "./Context/SymbolState"

function Navbar(props) {
  const {authFlag , setAuthFlag} = useContext(SymbolContext);
  const navigate = useNavigate();
  const [imput,setInput] = useState("");


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >
            StockSageHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={authFlag ? "/home":"/"}>
                  Home
                </a>
              </li>
              {authFlag ? <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/dashBoard">
                  DashBoard
                </a>
              </li> : null}
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            {authFlag ? <Search /> : null}
            
            {!authFlag ? <button
              className="btn btn-outline-primary me-2 ms-2"
              onClick={() => navigate("/login")}>
              Login
            </button> : null}
            
            
            {!authFlag ? <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}>
              Sign Up
            </button> : null}
            {authFlag ? <UserIcon /> : null}
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

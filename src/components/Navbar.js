import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { VscGraphScatter } from "react-icons/vsc";
// import Admin from "../pages/Admin/Admin";
import Model from "../pages/Model/Model";
import Home from "../pages/Home/Home";
import Docs from "../pages/Docs/Docs";
import OECD from "../pages/OECD/OECD";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar-container">
            <ul id="navbar-left">
              <li>
                <div className="nav-link">
                  <Link to="/">B.W. Data</Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-right">
              {/* <li className="nav-link">
                <Link to="/model">Model</Link>
              </li> */}
              {/* <li className="nav-link">
                <Link to="/OECD-Project">OECD Project</Link>
              </li> */}
              <li className="nav-link">
                <Link to="/docs">Docs</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          {/* <Route path="/model" element={<Model />} /> */}
          <Route path="/docs" element={<Docs />} />
          {/* <Route path="/OECD-Project" element={<OECD />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;

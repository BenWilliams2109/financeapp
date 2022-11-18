import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { VscGraphScatter } from "react-icons/vsc";
import Admin from "../pages/Admin/Admin";
import Model from "../pages/Model/Model";
import Home from "../pages/Home/Home";
import Docs from "../pages/Docs/Docs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar-container">
            <ul id="navbar-left">
              <li>
                <div className="home-icon">
                  <div className="home-icon-element">
                    <VscGraphScatter />
                  </div>
                  <div className="home-icon-element">
                    <Link to="/">B.W. Finance</Link>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-right">
              <li>
                <Link to="/model">Model</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <Link to="/admin">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/model" element={<Model />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;

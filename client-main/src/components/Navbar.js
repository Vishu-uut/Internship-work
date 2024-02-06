import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen); // Correctly toggling the state based on the previous state
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="Company Logo" />
      </NavLink>

      <button onClick={toggleDropdown} className="dropbtn">
        <span className="dropdown-icon">&#9776;</span>
      </button>

      <div className={`navbar-items ${isOpen ? 'show' : ''}`}>
        <NavLink to="/about" activeClassName="active">About Us</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        <NavLink to="/services" activeClassName="active">Our Services</NavLink>
        <NavLink to="/login-user" activeClassName="active">Sign In</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import "./CSSFiles/NavbarStyles.css";
import "./CSSFiles/DropdownStyles.css";

class Header extends Component {
  state = { clicked: false };
  // const navigate=useNavigate();

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
      return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">EduTech</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <div className="nav-item">
              <li>
                <a href="/" className="nav-links">
                  <i className="fa-solid fa-house-user"></i>
                  Home
                </a>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <a href="/about" className="nav-links">
                  <i className="fa-solid fa-circle-info"></i>
                  About
                </a>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <a href="/service" className="nav-links">
                  <i className="fa-solid fa-briefcase"></i>
                  Service
                </a>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <a href="/contact" className="nav-links">
                  <i className="fa-solid fa-address-book"></i>
                  Contact
                </a>
              </li>
            </div>
            <div className="nav-item">
              <button>Sign In</button>
            </div>
          </ul>
        </nav>
      );
    }
}
export default Header;
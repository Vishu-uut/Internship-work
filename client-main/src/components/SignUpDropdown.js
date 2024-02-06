import React, { useState } from 'react';
import './DropdownStyles.css';

const SignUpDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="signup-button">
        Sign In
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <ul>
            <li>Student</li>
            <li>Mobiliser</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignUpDropdown;

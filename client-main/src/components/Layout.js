import React from "react";
import { Link } from "react-router-dom";
import "./CSSFiles/layout.css"; // Import the CSS file

const Layout = () => {
  return (
    <div className="containerc"> {/* Use the "container" class */}
      <div className="center">
        <Link to="/create">
          <button className="button">Create Camp</button>
        </Link>
        <Link to="/manage">
          <button className="button">Manage Camp</button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;

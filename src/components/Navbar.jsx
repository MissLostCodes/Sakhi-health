import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/health-check">Health Check</Link></li>
        <li><Link to="/ngos">NGOs</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;

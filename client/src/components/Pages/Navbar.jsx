// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Css/navbar.css'; // Stil dosyasını ekleyin

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Your Logo</div>
        <div className="navbar-links">
          <Link to="/">index</Link>
          <Link to="/Estate">Estate</Link>
          <Link to="/PropertyAdd">Property Add</Link>
          <Link to="/tenantAdd">Tenant Add</Link>
          <Link to="/tenantSell">Tenant Sell</Link>
          <Link to="/signIn">Sign In</Link>
          <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

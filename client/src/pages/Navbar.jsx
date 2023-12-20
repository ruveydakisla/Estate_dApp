import React from "react";
import { Link, NavLink,BrowserRouter as Router} from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/about">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/services">Hizmetler</Link>
        </li>
        <li>
          <NavLink to="/spaces" activeClassName="active">
            Alanlar
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active">
            Eylemler
          </NavLink>
        </li>
      </ul>
    </nav>
    </Router>
  );
};

export default Navbar;

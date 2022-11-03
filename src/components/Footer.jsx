import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footereano">
      <div className="navegation">
        <h4>
          <span>|</span> Navegation
        </h4>
        <ul>
          <NavLink to ="/home" style={{textDecoration: 'none'}}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/cities" style={{textDecoration: 'none'}}>
            <li>Cities</li>
          </NavLink>
          <NavLink to="/hotels" style={{textDecoration: 'none'}}>
            <li>Hotels</li>
          </NavLink>
        </ul>
      </div>

      <div className="aboutus">
        <h4>
          <span>|</span> About US
        </h4>
        <ul>
          <a href="https://github.com/ezeqduarte" target="blank" style={{textDecoration: 'none'}}>
            <li>Ezequiel Duarte</li>
          </a>
          <a href="https://github.com/matiasecharri" target="blank" style={{textDecoration: 'none'}}>
            <li>Matias Echarri</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

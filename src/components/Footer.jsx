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
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/cities">
            <li>Cities</li>
          </NavLink>
          <NavLink to="/hotels">
            <li>Hotels</li>
          </NavLink>
        </ul>
      </div>

      <div className="aboutus">
        <h4>
          <span>|</span> About US
        </h4>
        <ul>
          <a href="https://github.com/ezeqduarte" target="blank">
            <li>Ezequiel Duarte</li>
          </a>
          <a href="https://github.com/matiasecharri" target="blank">
            <li>Matias Echarri</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

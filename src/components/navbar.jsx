import React from "react";
import Logo from "../assets/svgs/logo.svg";
import "../styles/navbar.css";

const navbar = () => {
  return (
    <div className="navbar-container" id="inicio">
      <div className="logo-container">
        <a href="/tlk-us">
          <img src={Logo} alt="logo de la empresa" />
        </a>
      </div>
      <div className="opciones-container">
        <ul>
          <li>
            <a href="/tlk-us">Inicio</a>
          </li>
          <li>
            <a href="#informacion">Info</a>
          </li>
          <li>
            <a href="#precios">Precios</a>
          </li>
          <li>
            <a href="#legales">Legales</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;

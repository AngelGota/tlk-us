import React from "react";
import Logo from "../assets/svgs/logo.svg";
import "../styles/navbar.css";

const navbar = () => {
  return (
    <div className="navbar-container" id="inicio">
      <div className="logo-container">
        <img src={Logo} alt="logo de la empresa" />
      </div>
      <div className="opciones-container">
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
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

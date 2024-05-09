import React from "react";
import Logo from "../assets/svgs/logo.svg";
import "../styles/footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="logo" />
    </div>
  );
};

export default footer;

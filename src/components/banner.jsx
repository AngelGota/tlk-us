import React from "react";
import Banner from "../assets/images/banner-danna-paola-2024-2.jpg";
import "../styles/banner.css";

const banner = () => {
  return (
    <div className="banner-container">
      <img src={Banner} alt="banner danna paola" />
    </div>
  );
};

export default banner;

import React from "react";
import Escenary from "../assets/images/mapadanna.png";
import { Link } from "react-router-dom";
import "../styles/priceEvent.css";

const PriceEvent = () => {
  return (
    <div className="price-container">
      <div className="escenary-container">
        <img
          src={Escenary}
          alt="imagen del escenario"
          className="escenary-image"
        />
      </div>

      <div className="prices-section">
        <div className="price-grid">
          <div className="category">
            <p className="title-category">Zona</p>
            <p className="category">Rosa</p>
            <p className="category">Celeste</p>
            <p className="category">Amarillo</p>
            <p className="category">Rojo</p>
          </div>
          <div className="price">
            <p className="title-price">Precio</p>
            <p className="price">
              <span>s/</span> 518.00
            </p>
            <p className="price">
              <span>s/</span> 380.00
            </p>
            <p className="price">
              <span>s/</span> 276.00
            </p>
            <p className="price">
              <span>s/</span> 150.00
            </p>
          </div>
        </div>
        <div className="buttons-container">
          <Link to="/carshop">
            <button className="buy-tickets-button">Comprar tickets</button>
          </Link>

          <a className="need-help-link" href="https://www.google.com">
            ¿Necesitas ayuda?
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceEvent;

import React from "react";
import "../styles/carShop.css";

const CarShop = () => {
  return (
    <div className="carshop-container">
      <div className="subcontainer">
        <div>
          <h1>Resumen de compra</h1>
        </div>
        <div className="compra-container">
          <div className="columnaUno">
            <div className="detalle">
              <h2>Detalle</h2>
              <p>
                Tickets: <span>2</span>
              </p>
              <p>
                Zona: <span>Rojo</span>
              </p>
            </div>
          </div>
          <div className="columnaDos">
            <h2>SubTotal</h2>
            <p>
              Cantidad: <span>2</span>
            </p>
            <p>
              Precio: s/<span>150.00</span>
            </p>
            <p>
              Total: s/<span>300.00</span>
            </p>
          </div>
        </div>
        <div className="button">
          <button>Ir a pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CarShop;

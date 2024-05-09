import React from "react";
import DannaLive from "../assets/images/resena.png";
import Partners from "../assets/images/partners-2.png";
import "../styles/legal.css";

const legal = () => {
  return (
    <div className="legal-container" id="legales">
      <div className="danna-title">
        <img src={DannaLive} alt="danna live" />
      </div>
      <div className="lista-container">
        <li>Público recomendado: Adultos</li>
        <li>Podrán ingresar desde los 10 años de edad pagando su entrada.</li>
        <li>Duración aproximada del evento: 2 Hrs.</li>
        <li>Compra máxima por persona: 6 tickets.</li>
        <li>
          Capacidades: Red carpet (1,000), Diamante (1,500), Platinum (1,000) y
          Zafiro (1,000)
        </li>
        <li>Precios incluyen comisión de la ticketera.</li>
      </div>
      <div className="partners-container">
        <img src={Partners} alt="partners img" />
      </div>
    </div>
  );
};

export default legal;

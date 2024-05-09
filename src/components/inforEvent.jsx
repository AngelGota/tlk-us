import React from "react";
import LogoInfo from "../assets/images/info-danna-paola.jpg";
import DannaLive from "../assets/images/resena.png";
import "../styles/infoEvent.css";

const inforEvent = () => {
  return (
    <div className="info-container">
      <div className="img-container">
        <img src={LogoInfo} alt="informacion logo" />
      </div>
      <div className="texto-container">
        <img src={DannaLive} alt="danna title img" />
        <p>
          La cantante y actriz mexicana, Danna Paola anuncia presentación en
          Perú donde se encontrará con sus fans que esperan con ansias su
          llegada a nuestro país.
        </p>
        <p>
          Con una carrera en ascenso, la artista se ha destacado en diversas
          áreas como cine, teatro, series y televisión, presentándose en los
          escenarios más importantes de Latinoamérica.{" "}
        </p>
        <p>
          La gira que Danna Paola realizará en Perú, ha sido un éxito en México,
          Sudamérica y Estados Unidos, donde los fans han sido testigos del
          talento de la cantante de pop.{" "}
        </p>
        <p>
          Su poderosa voz y puesta en escena la han llevado al estrellato
          mundial, convirtiéndose en la artista femenina mexicana más escuchada,
          según Spotify.
        </p>
        <p>
          Entre los hits de la artista figuran “XT4S1S”, “K.O”, “Mala Fama”
          singles que han estado en los primeros lugares de las plataformas
          musicales.
        </p>
        <p>
          Su más reciente lanzamiento “Tenemos que hablar” ya se instala entre
          lo más escuchado.
        </p>
      </div>
    </div>
  );
};

export default inforEvent;

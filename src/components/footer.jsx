import React from "react";
import "../../src/";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="ruta_logo.png" alt="Logo de la agencia" />
      </div>
      <div className="social-media">
        {/* Agrega tus iconos de redes sociales aquí */}
      </div>
      <div className="contact-info">
        <p>Número de Teléfono: +123 456 789</p>
        <p>Correo Electrónico: info@example.com</p>
        <p>Dirección: Tu Dirección, Ciudad, País</p>
      </div>
      <div className="copyright">
        A G E N C I A D E M A R K E T I N G D I G I T A L - B A R R A N Q U I L
        L A - C O L O M B I A / C O P Y R I G H T 2 0 2 3
      </div>
    </footer>
  );
};

export default Footer;

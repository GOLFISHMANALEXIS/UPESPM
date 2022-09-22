import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <p>El propósito de este medio es para crear un mecanismo de acceso a la información, de consulta y propuesta, sobre los Currículum Vitae, de las personas que tengan en el interés en ser considerados para laborar profesionalmente en el gobierno municipal de Tehuacán</p>
       <p>
        Esta herramienta, tiene como ventaja a los ciudadanos postulantes agilizar los procesos de selección laboral. Para el gobierno la ventaja es eficientar el proceso, transparentar la información, generar confianza en el ciudadano y por consecuencia crear un modelo de gobernanza.
        </p>
        
      </div>
      <div className="about-img">
        <img
          src="https://seeklogo.com/images/T/tehuacan-escudo-de-armas-logo-0DD2CD8FE7-seeklogo.com.png"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;

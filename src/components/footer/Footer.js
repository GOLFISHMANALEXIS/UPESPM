import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Sergio Martínez Bazan</h1>
        <p>Lic.Ciencias Politicas</p>
      </div>
      <div className="footer-contact">
        <h3>Contactos</h3>
      </div>
      <div className="footer-sns">
        <div className="design-by">238-128-1082<p>238-2487262</p></div>
        <div className="sns-links">
          <a href="https://twitter.com/checoBazan?t=hFsQarj9sucsnFjbQpNNFQ&s=08" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/checo.bazan" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

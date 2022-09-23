import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.location.href = "https://www.instagram.com/sergio_bazan/";
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Sergio Martínez Bazán
      </div>
    </nav>
  );
};

export default Navbar;

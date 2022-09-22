import React from "react";
import "./Slider.css";
const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Secretario",
    desc: "Secretario",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Personal de intendencia",
    desc: "Personal de intendencia",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Contador",
    desc: "Contador",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Adiministrador",
    desc: "Administrador",
  },
  
];
const toTheTop = () => {
  window.location.href = "https://stately-vacherin-1b0bc2.netlify.app/";
};
const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc" onClick={toTheTop}>
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;

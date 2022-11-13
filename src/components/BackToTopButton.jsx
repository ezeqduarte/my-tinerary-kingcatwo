import React from "react";
import { useEffect, useState } from "react";

// Está complicado el asunto :/

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="BackToTopButton">
      {backToTopButton && (
        <button className="scrollTopBoton" onClick={scrollUp}>
     
    <div className="box">B</div>
    <div className="box">A</div>
    <div className="box">C</div>
    <div className="box">K</div>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;

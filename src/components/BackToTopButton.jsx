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
    <div className="BackToTopButton"  class="button">
      {backToTopButton && (
        <button className="scrollTopBoton" onClick={scrollUp}>
     
    <div class="box">B</div>
    <div class="box">A</div>
    <div class="box">C</div>
    <div class="box">K</div>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;

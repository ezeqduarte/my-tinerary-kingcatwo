import React from "react";
import BackToTopButton from "../components/BackToTopButton";
import Carrousel from "../components/Carrousel";
import CarrouselCities from "../components/CarrouselCities";
import Footer from "../components/Footer";


export default function Home2() {
  return (
    <>
      <main>
        <div className="subtitulosMain">
          <h2>
            CITIES & HOTELS<span className="puntoRojo">.</span>
          </h2>
          <h3>Meet popular locations and best comodities!</h3>
        </div>
        
        <CarrouselCities></CarrouselCities>
        

       

        <Carrousel></Carrousel>
   
        <BackToTopButton className="scrollTopBoton"></BackToTopButton>
      </main>

    </>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import hotels from "../data/hotels";

export default function ItineraryCard(props) {


  let { itinerary } = props;  

  let [mostrarComentarios, setMostrarComentarios] = useState(false);

  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  return (
    <>
      <div className="rowComentsCards">
        <div className="cardItinerary">
          <div className="imgCard">
            <img src={itinerary.photo[0]} alt={itinerary.name} />
          </div>
          <h3 className="tituloCardItinerary">{itinerary.name}</h3>

          <div className="description">
            <p>{itinerary.description}</p>
          </div>

          <div className="btn-details" onClick={change}>
            <p>Coments</p>
          </div>
        </div>

        {mostrarComentarios ? (
          <div className="coments">
            <p>Coments</p>
            <div className="coment">
              <p>Nombre Usuario</p>
              <p>Comentario</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

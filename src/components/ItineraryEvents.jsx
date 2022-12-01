import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import events from "../data/events";

export default function ItineraryEvents(props) {
  let object = props.object;


  let [mostrarComentarios, setMostrarComentarios] = useState(false);
  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  return (
    <div className="elPadre">
      <div className="cardEvents">
        <div className="imgCard">
          <img src={object.photo} alt={object.name} />
        </div>
        <h4>{object.name}</h4>

        <p>The price is: ${object.price}</p>

        <p>The date is: {object.date.toString().slice(0, 10)}</p>

        <div className="btn-details" onClick={change}>
          <p>Comentaries</p>
        </div>
        
      </div>
      {mostrarComentarios ? (
          <div className="elHijo">Que Domingoooo</div>
        ) : (
          <div></div>
        )}
    </div>
  );
}

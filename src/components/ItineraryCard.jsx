import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import hotels from "../data/hotels";
import Reaction from "./Reaction";
import Comments from "./Comments";
export default function ItineraryCard(props) {
  let { itinerary, reload, setReload } = props;

 /*  const { allReactions } = useSelector((store) => store.reactionsReducer); */

  let [mostrarComentarios, setMostrarComentarios] = useState(false);

  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  return (
    <>
  
      <div className="ContenedorGeneral99">
      <div className="divReactionImg">
            <Reaction itinerary={itinerary._id}></Reaction>
          </div>
        <div className="CardGigante99">
          <div className="imgCardGigante99">
            <img src={itinerary.photo[0]} alt="" srcset="" />
          </div>
          <div className="infoCardGigante99">
            <h3>
              <span className="rojo">|</span>
              {itinerary.name}
            </h3>
            <p>{itinerary.description}</p>
            <div className="pd99">
              <p>
                {" "}
                <span className="negrita99">Price:</span> ${itinerary.price}
              </p>
              <p>
                {" "}
                <span className="negrita99">Duration:</span>{" "}
                {itinerary.duration}hs
              </p>
            </div>
            <button className="btn-details" onClick={change}>
              See the Comments
            </button>
          </div>
        </div>
       
      </div>
       {mostrarComentarios ? (
          <div className="comments99">
            <h3> Comments of our Travelers</h3>
            <Comments></Comments>
            <Comments></Comments>
            <Comments></Comments>
            <Comments></Comments> 
            <Comments></Comments>
            <Comments></Comments>     
            <Comments></Comments>
            <Comments></Comments>
            <Comments></Comments>
            <Comments></Comments>    
            <Comments></Comments>
            <Comments></Comments>       
                 
             
        
         
          </div>
        ) : null}
      
    </>
  );
}

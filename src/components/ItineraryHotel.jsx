import React, { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import hotels from "../data/hotels";

export default function ItineraryHotel() {
  
  const { id } = useParams();

  let hotel = hotels.find((hotel) => hotel.cityId === id);


  let [mostrarComentarios, setMostrarComentarios] = useState(false)

  let change = () => {
      
    setMostrarComentarios(!mostrarComentarios)        
      
  }

  return (
    <>
      <div className="rowComentsCards">
        <div className="cardCity">
          <div className="imgCard">
            <img src={hotel.photo[0]} alt={hotel.name} />
          </div>
          <h4>{hotel.name}</h4>
          <NavLink style={{textDecoration: 'none'}} className="btn-details" to={`/detailshotel/${hotel.id}`} >
          <div >
            <p>More details</p>
          </div>
          </NavLink>
          <div className="btn-details" onClick={change}>
            <p>Coments</p>
          </div>
        </div>

        {mostrarComentarios
          ? <div className="coments">
          <p>Coments</p>
          <div className="coment" >
            <p>Nombre Usuario</p>
            <p>Comentario</p>
          </div>
        </div>
          : <></>
      
      }
        
        
      </div>
    </>
  );
}

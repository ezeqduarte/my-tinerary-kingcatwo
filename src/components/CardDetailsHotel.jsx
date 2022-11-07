import React from "react";
import { useParams } from "react-router";
import hotels from "../data/hotels"

export default function CardDetailsHotel() {
    const {id} = useParams()
    let hotel = hotels.find(hotel=>hotel.id === id)
   

  return (

    <div className="cardDetailsHotel">
        
      <div className="imagenCardDetailsHotel">
        <img src={hotel.photo[0]} alt=""/>

      </div>



      <div className="informacionCardDetailsHotel">   
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
      <p>The hotel capacity is: {hotel.capacity}</p>



      </div>
    </div>
  );
}

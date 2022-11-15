import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import hotels from "../data/hotels"
import axios from "axios";




export default function CardDetailsHotel() {
  const {id} = useParams()

  let [hotel, setHotel] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${id}`)
      .then((response) => setHotel(response.data.hotel));
  }, []);


  return (

    <div className="cardDetailsHotel">
        
      <div className="imagenCardDetailsHotel">
        <img src={hotel.photo} alt=""/>

      </div>
      



      <div className="informacionCardDetailsHotel">   
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
      <p>The hotel capacity is: {hotel.capacity}</p>



      </div>
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import hotels from "../data/hotels"
import axios from "axios";
import GoTo from "./GoTo";




export default function CardDetailsHotel() {
  const {id} = useParams()

  let [hotel, setHotel] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${id}`)
      .then((response) => setHotel(response.data.hotel));
  }, []);


  return (

    <div className="informacionCardDetails">
        
      {/* <div className="imagenCardDetailsHotel">
        <img src={hotel.photo} alt=""/>

      </div> */}
      



      <div className="informacionCardDetailsHotel">   
      <h2>{hotel.name}</h2>
      <p> <span className="negrita99">{hotel.description}</span></p>
      <p>The hotel capacity is: <span className="negrita99">{hotel.capacity}</span> </p>

      <GoTo anchor="#showsss"/>

      </div>
    </div>
  );
}

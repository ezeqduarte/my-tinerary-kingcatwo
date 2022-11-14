import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import CardDetailsHotel from "../../components/CardDetailsHotel";
import ItineraryEvents from "../../components/ItineraryEvents";
import events from "../../data/events";
import "../detailshotel/detailshotels.css";

export default function () {

const {id} = useParams()
// let itineraryEventsX = events.filter(event=>event.hotelId === id)
let [itineraryEventsX, setItineraryEventsX] = useState([])
useEffect(()=> {

axios.get(`http://localhost:8000/api/shows?hotelId=${id}`)
.then ((Response) => setItineraryEventsX(Response.data.searched))

},[])

  return (
    <div>
      <div className="detailshotel">
        <CardDetailsHotel></CardDetailsHotel>
      </div>

      <div className="informationhotel">
        <h2>
          Events<span className="rojo">.</span>{" "}
        </h2>
        <div className="eventsfromhotels">




            {itineraryEventsX.map(event=><ItineraryEvents object={event} key={event.name}> </ItineraryEvents>)}        


          
        </div>
      </div>
    </div>
  );
}

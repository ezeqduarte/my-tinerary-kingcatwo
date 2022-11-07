import React from "react";
import { useParams } from "react-router";
import CardDetailsHotel from "../../components/CardDetailsHotel";
import ItineraryEvents from "../../components/ItineraryEvents";
import events from "../../data/events";
import "../detailshotel/detailshotels.css";

export default function () {

const {id} = useParams()
let itineraryEventsX = events.filter(event=>event.hotelId === id)


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

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import API from "../../api";
import CardDetailsHotel from "../../components/CardDetailsHotel";
import ItineraryEvents from "../../components/ItineraryEvents";
import events from "../../data/events";
import "../detailshotel/detailshotels.css";

export default function () {
  const { id } = useParams();
  // let itineraryEventsX = events.filter(event=>event.hotelId === id)
  let [itineraryEventsX, setItineraryEventsX] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}shows?hotelId=${id}`)
      .then((Response) => setItineraryEventsX(Response.data.searched));
  }, []);

  return (
    <div>
      <div className="detailshotel">
        <CardDetailsHotel></CardDetailsHotel>
      </div>

      <div className="informationhotel" id="showsss">
        <h2>
          Events<span className="rojo">.</span>{" "}
        </h2>
        <div className="eventsfromhotels">
          {itineraryEventsX.length != 0 ? (
            itineraryEventsX.map((event) => (
              <ItineraryEvents object={event} key={event.name}>
                {" "}
              </ItineraryEvents>
            ))
          ) : (
            <h2 className="noMatch">
              There are no shows available
              <span className="rojo">.</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useParams } from "react-router";
import API from "../../api";
import CardDetailsCity from "../../components/CardDetailsCity";
import GoTo from "../../components/GoTo";
import ItineraryCard from "../../components/ItineraryCard";
import ItineraryHotel from "../../components/ItineraryCard";
import "../detailscities/detailscity.css";

export default function DetailsCity() {
  const { id } = useParams();
  
  let [itineraries, setItineraries] = useState([]);
  const dispatch = useDispatch();

  let [city, setCity] = useState({})


  useEffect(() => {
    axios
      .get(`${API}itineraries?cityId=${id}`)
      .then((response) => setItineraries(response.data.searched));
  }, []);

  useEffect(() => {
    axios
      .get(`${API}cities/${id}`)
      .then((response) => setCity(response.data.cities));
  }, []);


  /* console.log(itineraries); */

  return (
    <>
      <div
        className="detailscity"
        style={{ backgroundImage: `url(${city?.photo}) ` }}
      >
        <CardDetailsCity />
        
      </div>
      <div className="informationCities" id="itineraries">
        <h2>
          Itineraries<span className="rojo">.</span>
        </h2>
        <div className="hotelsfromcities" >
          {itineraries.length === 0 ? (
            <h2 className="noMatch">
              There are no itineraries available
              <span className="rojo">.</span>
            </h2>
          ) : (
            itineraries.map((itinerary) => (
              <ItineraryCard itinerary={itinerary} key={itinerary.name} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

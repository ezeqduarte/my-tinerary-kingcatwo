import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router";
import CardDetailsCity from "../../components/CardDetailsCity";
import GoTo from "../../components/GoTo";
import ItineraryCard from "../../components/ItineraryCard";
import ItineraryHotel from "../../components/ItineraryCard";
import "../detailscities/detailscity.css";
import API from "../../api";

export default function DetailsCity() {
  const { id } = useParams();
  let [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/itineraries?cityId=${id}`)
      .then((response) => setItineraries(response.data.searched));
  }, []);

  let [city, setCity] = useState({});

  useEffect(() => {
    async function fondo() {
      const res = await axios.get(`${API}cities/${id}`);
      setCity(res.data.cities);
    }
    fondo();
  }, []);

  return (
    <>
      <div
        className="detailscity"
        style={{ backgroundImage: `url(${city.photo}) ` }}
      >
        <CardDetailsCity />
      </div>
      <div className="informationCities" id="itineraries">
        <h2>
          Itineraries<span className="rojo">.</span>
        </h2>
        <div className="hotelsfromcities">
          {itineraries.length === 0 ? (
            <h2 className="noMatch">
              There are no itineraries available
              <span className="rojo">.</span>
            </h2>
          ) : (
            itineraries.map((itinerary) => (
              <ItineraryCard itinerary={itinerary} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

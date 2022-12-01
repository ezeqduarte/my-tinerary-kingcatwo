import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import places from "../data/cities";
import GoTo from "./GoTo";

export default function CardDetailsCity() {
  const { id } = useParams();

  let [place, setPlace] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((response) => setPlace(response.data.cities));
  }, []);

  return (
    <div className="cardDetailsCity">
      <div className="imagenCardDetails">
        <img src={place.photo} alt="" />
      </div>
      <div className="informacionCardDetails">
        <h3>
          <span className="rojo">|</span>
          {place.name}
        </h3>
        <p>This places is ubicated in {place.continent}.</p>
        <p>Have a population of {place.population} peoples.</p>
        <GoTo anchor="#itineraries" />
      </div>
    </div>
  );
}

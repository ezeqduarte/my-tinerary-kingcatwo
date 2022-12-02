import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import API from "../api";
import places from "../data/cities";
import GoTo from "./GoTo";

export default function CardDetailsCity() {
  const { id } = useParams();

  let [place, setPlace] = useState({});

  useEffect(() => {
    axios
      .get(`${API}cities/${id}`)
      .then((response) => setPlace(response.data.cities));
  }, []);

  return (
    
    <div className="informacionCardDetails">
      <h2>
        <span className="rojo"></span>
        {place.name}
      </h2>
      <p>This place is ubicated in <span className="negrita99">{place.continent}</span>.</p>
      <p>Have a population of <span className="negrita99">{place.population}</span> people.</p>
      <GoTo anchor="#itineraries" />
    </div>
  );
}

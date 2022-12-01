import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router";
import CardDetailsCity from "../../components/CardDetailsCity";
import GoTo from "../../components/GoTo";
import ItineraryCard from "../../components/ItineraryCard";
import ItineraryHotel from "../../components/ItineraryCard";
import "../detailscities/detailscity.css";
import reactionsActions from "../../redux/actions/reactionsActions";
import { useDispatch, useSelector } from "react-redux";

export default function DetailsCity() {
  const { id } = useParams();
  
  let [itineraries, setItineraries] = useState([]);
  const dispatch = useDispatch();
 /*  let [reload, setReload] = useState(false) */

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/itineraries?cityId=${id}`)
      .then((response) => setItineraries(response.data.searched));
  }, []);
/*   const { reactions } = reactionsActions; */

/*   let [reactionss, setReactionss] = useState(reactions)

  useEffect(() => {
    dispatch(reactions());
  }, []); */



  /* console.log(itineraries); */

  return (
    <>
      <div className="detailscity">
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
              <ItineraryCard itinerary={itinerary} key={itinerary.name} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

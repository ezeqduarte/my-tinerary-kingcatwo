import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormEditTinerary from "../../components/FormEditTinerary";
import GoTo from "../../components/GoTo";
import "../myTineraries/MyTineraries.css";
import tinerariesActions from "../../redux/actions/tinerariesActions";
import citiesActions from "../../redux/actions/citiesActions";
import { useEffect } from "react";
import CardMyTinerary from "../../components/CardMyTinerary";
import OurToastContainer from "../../components/OurToastContainer";
import CreateItineraryForm from "../../components/CreateItineraryForm";

export default function MyTineraries() {
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.userReducer);
  const tineraries = useSelector(
    (store) => store.tineraryReducer.tinerariesUser
  );

  const { getTinerariesUser, newTinerary } = tinerariesActions;
  const { getContinent } = citiesActions;

  const { continents } = useSelector((store) => store.citiesReducer);
 

  useEffect(() => {
    dispatch(getContinent());
    dispatch(getTinerariesUser(id));
  }, []);

 

  return (
    <>
      <div className="headerMyTineraries">
        <h2>
          Look at the Tineraries you created<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#MyTineraries"></GoTo>
      </div>
      <div className="formMyTineraries">
        <h2>
          Choose an option<span className="rojo">.</span>
        </h2>
        <CreateItineraryForm />
        <FormEditTinerary />
      </div>
      <div className="bodyTineraries" id="MyTineraries">
        <h2>
          Your Tineraries<span className="rojo">.</span>
        </h2>

        <div className="YourTinerariesDiv">
          {tineraries.map((itinerary) => (
            <CardMyTinerary itinerary={itinerary} key={itinerary.name} />
          ))}
        </div>
        <OurToastContainer />
      </div>
    </>
  );
}

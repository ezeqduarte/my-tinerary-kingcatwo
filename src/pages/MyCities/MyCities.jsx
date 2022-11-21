import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardMyCities from "../../components/CardMyCities";
import CreateCityAdmin from "../../components/CreateCityAdmin";
import EditCityAdmin from "../../components/EditCityAdmin";
import GoTo from "../../components/GoTo";
import "../MyCities/MyCities.css";

export default function MyCities() {
  let [citiesAdmin, SetCitiesAdmin] = useState([]);

  useEffect(() => {
    let peticion = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/cities/?userId=636d1e66dbb2d08117b1c7c2"
        );
        SetCitiesAdmin(res.data.cities);
      } catch (error) {
        console.log(error.message);
      }
    };
    peticion();
  }, []);

  console.log(citiesAdmin);

  return (
    <>
      <div className="headerMyCities">
        <h2>
          Look at the cities are you created<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#MyCities"></GoTo>
      </div>
      <div className="formMyCities">
        <h2>
          Choose an option<span className="rojo">.</span>
        </h2>
        <CreateCityAdmin />
        <EditCityAdmin />
      </div>
      <div className="bodyCities" id="MyCities">
        <h2>
          Your Cities<span className="rojo">.</span>
        </h2>

        <div className="YourCitiesDiv">
          {citiesAdmin.map((city) => (
            <CardMyCities city={city} key={city.name} />
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMyCities from "../../components/CardMyCities";
import CreateCityAdmin from "../../components/CreateCityAdmin";
import EditCityAdmin from "../../components/EditCityAdmin";
import GoTo from "../../components/GoTo";
import "../MyCities/MyCities.css";
import citiesActions from "../../redux/actions/citiesActions";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MyCities() {
  const dispatch = useDispatch();
  const citiesAdmin = useSelector((store) => store.citiesReducer.citiesOfAdmin);
  const { id } = useSelector((store) => store.userReducer);
  let [seeForm, setSeeForm] = useState(false);

  const { getCitiesOfAdmin } = citiesActions;

  useEffect(() => {
    dispatch(getCitiesOfAdmin(id));
  }, []);

  /* console.log(citiesAdmin); */

  const see = () => {
    setSeeForm(!seeForm);
  };

  return (
    <>
      <div className="headerMyCities">
        <h2>
          Look at the Cities you created<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#MyCities"></GoTo>
      </div>
      <div className="formMyCities">
        <h2>
          Choose an option<span className="rojo">.</span>
        </h2>
        {/* <CreateCityAdmin /> */}
        <div className="buttonsMycitiess">
          <NavLink to="/newcity" style={{ textDecoration: "none" }}>
            <button className="buttonMostrarActionMycities">CREATE CITY</button>
          </NavLink>
          <button onClick={see} className="buttonMostrarActionMycities">
            EDIT CITY
          </button>
        </div>
        {seeForm ? <EditCityAdmin /> : null}
      </div>
      <div className="bodyCities" id="MyCities">
        <h2>
          Your Cities<span className="rojo">.</span>
        </h2>

        <div className="YourCitiesDiv">
          {citiesAdmin.length === 0 ? (
            <h2 className="noMatch">There are no cities available</h2>
          ) : (
            citiesAdmin.map((city) => (
              <CardMyCities city={city} key={city.name} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

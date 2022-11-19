import React, { useRef, useState, useEffect } from "react";
import CardCity from "./CardCity";
import Label from "./Label";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

export default function MainCities() {
  const dispatch = useDispatch();
  let checksboxs = useRef();
  let inputText = useRef();

  let [checks, setChecks] = useState([]);
  let [text, setText] = useState("");
  let [data, setData] = useState({ peticion: "" });

  const { getCities, getContinent } = citiesActions;

  const citiesFiltered = useSelector((store) => store.citiesReducer.cities);
  const allContinents = useSelector((store) => store.citiesReducer.continents);

  useEffect(() => {
    dispatch(getContinent());
  }, []);

  function checkboxsCheckeds(e) {
    e.target.checked
      ? setChecks(checks.concat(e.target.value))
      : setChecks(checks.filter((check) => check !== e.target.value));
  }

  function searchText(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    let oracion = "?";
    for (const check of checks) {
      oracion += `continent=${check}&`;
    }
    if (text.length > 0) {
      oracion += `name=${text}`;
    }
    setData({ ...data, peticion: oracion });
  }, [checks, text]);

  useEffect(() => {
    dispatch(getCities(data));
  }, [data]);

  return (
    <>
      <form className="inputs">
        <fieldset>
          <label>
            Search for name of city
            <input
              type="text"
              onChange={searchText}
              className="searchForText"
              ref={inputText}
            />
          </label>
        </fieldset>

        <fieldset
          className="checkboxs"
          ref={checksboxs}
          onChange={checkboxsCheckeds}
        >
          {allContinents.map((continent) => (
            <Label continent={continent} key={continent}></Label>
          ))}
        </fieldset>
      </form>
      <div className="mainCities">
        {citiesFiltered.length !== 0 ? (
          citiesFiltered.map((city) => <CardCity city={city} key={city.name} />)
        ) : (
          <h2 className="noMatch">
            No cities were found that match your search
            <span className="rojo">.</span>
          </h2>
        )}
      </div>
    </>
  );
}

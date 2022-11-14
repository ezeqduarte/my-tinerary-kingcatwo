import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import CardCity from "../../components/CardCity";
import GoTo from "../../components/GoTo";
import Label from "../../components/Label";

import "../cities/cities.css";

export default function Cities() {
  
  let checksboxs = useRef();
  let inputText = useRef();

  let [allCities, setAllCities] = useState([]);
  let [checks, setChecks] = useState([]);
  let [text, setText] = useState("");
  let [citiesFiltered, setCitiesFiltered] = useState(allCities);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/")
      .then((response) => setAllCities(response.data.cities));
  }, []);

  let allContinents = [
    ...new Set([...allCities].map((city) => city.continent)),
  ];

  function checkboxsCheckeds(e) {
    e.target.checked
      ? setChecks(checks.concat(e.target.value))
      : setChecks(checks.filter((check) => check !== e.target.value));
  }

  console.log(checks);

  function searchText(e) {
    setText(e.target.value);
  }

  function peticion() {
    let oracion = "?";

    for (const check of checks) {
      oracion += `continent=${check}&`;
    }

    oracion += `name=${text}&`;

    return oracion;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${peticion()}`)
      .then((response) => setCitiesFiltered(response.data.cities));
  }, [checks, text]);

  return (
    <>
      <div className="headerCities">
        <h2>
          Meet our most popular locations<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#cities"></GoTo>
      </div>

      <div className="bodyCities" id="cities">
        <h2>
          Cities<span className="rojo">.</span>
        </h2>
        <div className="citiesPhrase">
          <p>The most populars cities, visited by our travelers...</p>
        </div>

        <form className="inputs">
          <fieldset
            className="checkboxs"
            ref={checksboxs}
            onChange={checkboxsCheckeds}
          >
            {allContinents.map((continent) => (
              <Label continent={continent} key={continent}></Label>
            ))}
          </fieldset>

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
        </form>
        <div className="mainCities">
          {citiesFiltered.length !== 0 ? (
            citiesFiltered.map((city) => (
              <CardCity city={city} key={city.name} />
            ))
          ) : (
            <h2 className="noMatch">
              No cities were found that match your search
              <span className="rojo">.</span>
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

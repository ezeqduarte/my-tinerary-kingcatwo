import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import CardCity from "../../components/CardCity";
import GoTo from "../../components/GoTo";
import Label from "../../components/Label";

import "../cities/cities.css";

export default function Cities() {
  //llamo a todas las ciudades para poder imprimir los checkboxs
  let [allCities, setAllCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/")
      .then((response) => setAllCities(response.data.cities));
  }, []);
  let allContinents = [
    ...new Set([...allCities].map((city) => city.continent)),
  ];
  //genere todos los checks
  //checks
  let checksboxs = useRef();
  let inputText = useRef();

  let [checks, setChecks] = useState([]);
  let [text, setText] = useState("");
  let [citiesFiltered, setCitiesFiltered] = useState(allCities);

  function checkboxsCheckeds(e) {
    if (e.target.checked) {
      setChecks(checks.concat(e.target.value));
    } else {
      setChecks(checks.filter((check) => check !== e.target.value));
    }
  }

  function searchText(e) {
    setText(e.target.value);
  }

  function peticion() {
    let oracion = "?";

    if (checks.length !== 0) {
      for (const check of checks) {
        oracion += `continent=${check}&`;
      }
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

        <form className="inputs" /* ref={form} */>
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
          {citiesFiltered.map((place) => (
            <CardCity city={place} key={place._id} />
          ))}
        </div>
      </div>
    </>
  );
}

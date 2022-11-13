import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import CardCity from "../../components/CardCity";
import GoTo from "../../components/GoTo";
import Label from "../../components/Label";

import "../cities/cities.css";

const initialChecboxsValues = {
  Asia: false,
  America: false,
  Africa: false,
  Europe: false,
};

export default function Cities() { 

  let [allCities, setAllCities] = useState([]);
  let [inputText, setInputText] = useState("");
  let [checkboxs, setCheckboxs] = useState(initialChecboxsValues);  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/")
      .then((response) => setAllCities(response.data.cities));
  }, []);

  let continents = [...new Set([...allCities].map((place) => place.continent))];



  let renderInput = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const checkboxsCheckeds = (e) => {
    setCheckboxs((checkboxs) => ({
      ...checkboxs,
      [e.target.value]: e.target.checked,
    }));
  };

  console.log(checkboxs);
  const form = useRef();

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

        <form className="inputs" ref={form}>
          <fieldset className="checkboxs" onChange={checkboxsCheckeds}>
            {continents.map((continent) => (
              <Label continent={continent} key={continent}></Label>
            ))}
          </fieldset>

          <fieldset>
            <label>
              Search for name of city
              <input
                type="text"
                className="searchForText"
                onChange={renderInput}
                value={inputText}
              />
            </label>
          </fieldset>
        </form>
        <div className="mainCities">
          {allCities.map((place) => (
            <CardCity city={place} key={place._id} />
          ))}
        </div>
      </div>
    </>
  );
}

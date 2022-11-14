import React, { useRef, useState, useEffect } from "react";
import CardHotels from "../../components/CardHotels";
import GoTo from "../../components/GoTo";
import Label from "../../components/Label";
import places from "../../data/cities";
import "../cities/cities.css";
import hotels from "../../data/hotels";

export default function Hotels() {
  let [inputText, setInputText] = useState("");

  let renderInput = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  let [option, setOption] = useState(hotels);
  function mayor(evento) {if (evento.target.value === "mayor") {
      setOption(option.sort((a, b) => b.capacity - a.capacity));
    } else if (evento.target.value === "menor") {
      setOption(option.sort((a, b) => a.capacity - b.capacity));
    } else {
      setOption(hotels);
    }
    console.log(option);
  }

  const form = useRef();

  return (
    <>
      <div className="headerCities">
        <h2>
          Meet our most popular hotels<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#cities"></GoTo>
      </div>

      <div className="bodyCities" id="cities">
        <h2>
          Hotels<span className="rojo">.</span>
        </h2>
        <div className="citiesPhrase">
          <p>The most populars hotels, visited by our travelers...</p>
        </div>

        <form className="inputs" ref={form}>
          <fieldset className="checkboxs">
            {/* {continents.map((continent) => (
              <Label continent={continent} key={continent}></Label>
            ))} */}
            <select onChange={mayor}>
              <option value="">Hotel Capacity</option>
              <option value="mayor">High Capacity</option>
              <option value="menor">Low Capacity</option>
            </select>
          </fieldset>

          <fieldset>
            <label>
              Search for name of hotel
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
          {hotels.map((place) => (
            <CardHotels hotel={place} key={place.id} />
          ))}
        </div>
      </div>
    </>
  );
}

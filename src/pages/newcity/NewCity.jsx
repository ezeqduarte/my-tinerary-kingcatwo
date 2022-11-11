import axios from "axios";
import React, { useRef } from "react";
import "../newcity/newcity.css";

export default function NewCity() {
  let form = useRef();
  let nameCity = useRef();
  let continentCity = useRef();
  let picture = useRef();
  let population = useRef();

  function newCity(event) {
    event.preventDefault();

    let newCity = {
      name: nameCity.current.value,
      continent: continentCity.current.value,
      photo: picture.current.value,
      population: population.current.value,
    };

    localStorage.setItem("newCity", JSON.stringify(newCity));
    form.current.reset();
  }

  return (
    <>
      <div className="divTituloNewcity">
        <h2 className="tituloNewCity">
          Create new City<span className="rojo">.</span>
        </h2>
      </div>
      <div className="newcity">
        <form className="formNewCity" onSubmit={newCity} ref={form}>
          <label>
            Name of city
            <input type="text" name="nameCity" ref={nameCity} required />
          </label>
          <label>
            Continent
            <input
              type="text"
              name="continentCity"
              ref={continentCity}
              required
            />
          </label>
          <label>
            Choose a picture of city
            <input
              type="text"
              name="photoCity"
              ref={picture}
              required
              id="photo"
            />
          </label>

          <label>
            Population
            <input
              type="number"
              name="populationCity"
              ref={population}
              required
            />
          </label>
          <button className="btn-newcity">CREATE A NEW CITY</button>
        </form>
      </div>
    </>
  );
}

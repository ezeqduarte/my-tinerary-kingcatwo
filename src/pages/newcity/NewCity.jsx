import React, { useRef } from "react";
import BackToTopButton from "../../components/BackToTopButton";
import "../newcity/newcity.css";

export default function NewCity() {
  let form = useRef();
  let nameCity = useRef();
  let continentCity = useRef();
  let picture = useRef();
  let population = useRef();

  console.log(form.current);
  console.log(nameCity.current);
  console.log(continentCity.current);
  console.log(picture.current);
  console.log(population.current);

  function newCity(event) {
    let newCity = {
      id: nameCity.current.value,
      name: nameCity.current.value,
      continent: continentCity.current.value,
      photo: picture.current.value,
      population: population.current.value,
      userId: "admn0",
    };

    console.log(picture.current.value);

    event.preventDefault();

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
          <label>Choose a picture of city</label>

          <input
            type="file"
            name="photoCity"
            accept=".jpg"
            ref={picture}
            required
            id="photo"
          />
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

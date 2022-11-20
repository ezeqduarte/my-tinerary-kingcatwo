import axios from "axios";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "../newcity/newcity.css";
import { useNavigate } from "react-router";
import OurToastContainer from "../../components/OurToastContainer";

export default function NewCity() {
  let form = useRef();
  let nameCity = useRef();
  let continentCity = useRef();
  let picture = useRef();
  let population = useRef();
  const navigate = useNavigate();

  const [objectForm, setObjectForm] = useState({
    name: "",
    continent: "",
    photo: "",
    population: 0,
    userId: "636d1e66dbb2d08117b1c7c2",
  });

  /* console.log(typeof(objectForm.population)); */

  function handleForm(event) {
    let object = { ...objectForm, [event.target.id]: event.target.value };

    setObjectForm(object);
  }
  /* 
  console.log(typeof objectForm.name);
  console.log(typeof objectForm.continent);
  console.log(typeof objectForm.photo);
  console.log(typeof objectForm.population); */

  async function submitForm(event) {
    event.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:8000/api/cities/",
        objectForm
      );

      console.log(response.data);
      response.data.success === false
        ? response.data.message.map((message) =>
            toast.error(`${message}`, {
              position: "bottom-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          )
        : toast.success(`${response.data.id.name} has created successfuly`, {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

      setTimeout(function () {
        navigate(`/details/${response.data.id._id}`);
      }, 2700);
    } catch (error) {
      console.log(error);
    }

    /* console.log(objectForm); */

    setObjectForm({
      name: "",
      continent: "",
      photo: "",
      population: 0,
      userId: "636d1e66dbb2d08117b1c7c2",
    });

    event.target.reset();
  }

  /*   console.log(objectForm); */

  return (
    <>
      <div className="divTituloNewcity">
        <h2 className="tituloNewCity">
          Create new City<span className="rojo">.</span>
        </h2>
      </div>
      <div className="newcity">
        <form className="formNewCity" onSubmit={submitForm} ref={form}>
          <label>
            Name of city
            <input
              type="text"
              name="nameCity"
              id="name"
              ref={nameCity}
              onChange={handleForm}
              placeholder="Insert name of the city"
              required
            />
          </label>
          <label>
            Continent
            <input
              type="text"
              name="continentCity"
              ref={continentCity}
              id="continent"
              onChange={handleForm}
              placeholder="Insert continent of the city"
              required
            />
          </label>
          <label>
            Picture of city
            <input
              type="text"
              name="photoCity"
              ref={picture}
              id="photo"
              onChange={handleForm}
              placeholder="Insert photo URL of the city"
              required
            />
          </label>

          <label>
            Population
            <input
              type="number"
              name="populationCity"
              id="population"
              ref={population}
              onChange={handleForm}
              placeholder="Insert population of the city"
              required
            />
          </label>
          <button className="btn-newcity">CREATE A NEW CITY</button>
        </form>
      </div>
     <OurToastContainer/>
    </>
  );
}

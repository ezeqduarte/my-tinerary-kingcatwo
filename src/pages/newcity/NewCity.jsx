import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "../newcity/newcity.css";
import { useNavigate } from "react-router";
import OurToastContainer from "../../components/OurToastContainer";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";

export default function NewCity() {
  let form = useRef();
  let nameCity = useRef();
  let continentCity = useRef();
  let picture = useRef();
  let population = useRef();
  const { id } = useSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createCity } = citiesActions;

  async function submitForm(event) {
    event.preventDefault();

    const data = {
      name: nameCity.current.value.charAt(0).toUpperCase() + nameCity.current.value.slice(1).toLowerCase() ,
      continent:
        continentCity.current.value.charAt(0).toUpperCase() +
        continentCity.current.value.slice(1).toLowerCase(),
      photo: picture.current.value,
      population: population.current.value,
      userId: id,
    };



     try {
      const res = await dispatch(createCity(data));
      if (res.payload.success) {
        toast.success(
          `${res.payload.cityCreated.name} has created successfuly`,
          {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        form.current.reset();
        setTimeout(function () {
          navigate(`/details/${res.payload.cityCreated._id}`);
        }, 2700);
      } else {
        res.payload.message.map((message) =>
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
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="divTituloNewcity">
        <h2 className="tituloNewCity">
          Create New City<span className="rojo">.</span>
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
              placeholder="Insert population of the city"
              required
            />
          </label>
          <button className="btn-newcity">CREATE A NEW CITY</button>
        </form>
      </div>
      <OurToastContainer />
    </>
  );
}

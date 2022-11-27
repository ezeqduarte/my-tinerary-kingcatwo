import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { toast } from "react-toastify";
import OurToastContainer from "../components/OurToastContainer";

export default function EditCityAdmin() {
  let form = useRef();
  let cityUpdate = useRef();
  let name = useRef();
  let continent = useRef();
  let photo = useRef();
  let population = useRef();
  const dispatch = useDispatch();
  const { editCityAdmin } = citiesActions;
  const { citiesOfAdmin } = useSelector((state) => state.citiesReducer);
  const { id } = useSelector((store) => store.userReducer);

  const clear = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "The form is clean",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      padding: "2rem",
    });
    form.current.reset();
  };

  const send = async (event) => {
    event.preventDefault();

    let data = {
      id: cityUpdate.current.value,
      name: name.current.value,
      continent:
        continent.current.value.charAt(0).toUpperCase() +
        continent.current.value.slice(1).toLowerCase(),
      photo: photo.current.value,
      population: population.current.value,
      userId: id,
    };

    try {
      const res = await dispatch(editCityAdmin(data));

      if (res.payload.success) {
        Swal.fire({
          title: "The city has updated",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          confirmButtonColor: "#ff3648",
          padding: "2rem",
        });
        form.current.reset();
      }  else {
        res.payload.message.map((message) => {
          toast.error(`${message}`, {
            position: "top-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Please select a tinerary",
        imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
        width: "25rem",
        padding: "2rem",
        confirmButtonColor: "#ff3648",
      });
    }
  };

  return (
    <div className="formCityAdmin">
      <h3>
        Edit City<span className="rojo">.</span>
      </h3>

      <form ref={form} onSubmit={send}>
        <fieldset className="editcityfieldset">
          <label>
            Tinerary<span className="rojo">.</span>
            <select ref={cityUpdate}>
              <option value="">Choose itinerary</option>
              {citiesOfAdmin.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Name<span className="rojo">.</span>
            <input
              ref={name}
              type="text"
              placeholder="Insert name of the city"
              id="name"
              required
            />
          </label>
          <label>
            Continent<span className="rojo">.</span>
            <input
              ref={continent}
              type="text"
              placeholder="Insert continent of the city"
              id="continent"
              required
            />
          </label>
          <label>
            Photo<span className="rojo">.</span>
            <input
              ref={photo}
              type="text"
              placeholder="Insert photo URL of the city"
              id="photo"
              required
            />
          </label>
          <label>
            Population<span className="rojo">.</span>
            <input
              ref={population}
              type="number"
              placeholder="Insert population of the city"
              id="population"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <button onClick={clear}>CLEAR</button>
          <button onClick={send}>SEND</button>
        </fieldset>
        <OurToastContainer />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function EditCityAdmin() {
  let form = useRef();
  const dispatch = useDispatch();
  const { editCityAdmin } = citiesActions;

  const [data, setData] = useState({
    id: "",
    name: "",
    continent: "",
    photo: "",
    population: 0,
  });

  function handleForm(event) {
    let object = { ...data, [event.target.id]: event.target.value };

    setData(object);
  }

  /* console.log(data); */

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
    if (
      data.id !== "" &&
      data.name !== "" &&
      data.continent !== "" &&
      data.photo !== "" &&
      data.population !== 0
    ) {
      console.log(data);
      dispatch(editCityAdmin(data));
      form.current.reset();
      setData({
        id: "",
        name: "",
        continent: "",
        photo: "",
        population: 0,
      });

      Swal.fire({
        title: "The city has modificated",
        imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
        width: "25rem",
        padding: "2rem",
      });
    } else {
      Swal.fire({
        title: "Cant modificate. Please complete all camps",
        imageUrl:
          "https://img.icons8.com/sf-black-filled/120/null/multiply.png",
        width: "25rem",
        padding: "2rem",
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
            Id city<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert id of the city"
              id="id"
              onChange={handleForm}
              required
            />
          </label>
          <label>
            Name<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert name of the city"
              id="name"
              onChange={handleForm}
              required
            />
          </label>
          <label>
            Continent<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert continent of the city"
              id="continent"
              onChange={handleForm}
              required
            />
          </label>
          <label>
            Photo<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert photo URL of the city"
              id="photo"
              onChange={handleForm}
              required
            />
          </label>
          <label>
            Population<span className="rojo">.</span>
            <input
              type="number"
              placeholder="Insert population of the city"
              id="population"
              onChange={handleForm}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <button onClick={clear}>CLEAR</button>
          <button onClick={send}>SEND</button>
        </fieldset>
      </form>
    </div>
  );
}

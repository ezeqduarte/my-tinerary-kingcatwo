import React, { useRef } from "react";
import OurToastContainer from "./OurToastContainer";
import axios from "axios";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2";
import API from "../api";
import { useSelector } from "react-redux";

export default function NewReactionShows() {
  const { id } = useSelector((store) => store.userReducer);
  let [shows, setShows] = useState([]);
  useEffect(() => {
    async function set() {
      const shows = await axios.get(`${API}shows/`);
      setShows(shows.data.searched);
    }
    set();
  }, []);

  let form = useRef();
  let name = useRef();
  let show = useRef();
  let iconBack = useRef();
  let activeIcon = useRef();

  const sendNewReaction = async (event) => {
    event.preventDefault();

    const newReaction = {
      showId: show.current.value,
      name: name.current.value + show.current.value,
      icon: activeIcon.current.value,
      iconBack: iconBack.current.value,
      userId: [],
    };

    Swal.fire({
      title: "Are you sure to create this reaction?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, create it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const peticion = await axios.post(`${API}reactions`, newReaction);

        if (peticion.data.success) {
          Swal.fire({
            title: "The reaction has created",
            imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
            width: "25rem",
            padding: "2rem",
          });
          form.current.reset();
        } else {
          peticion.data.message.map((message) =>
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
      }
    });
  };

  return (
    <div className="newReaction">
      <div className="formNewReaction">
        <h3>
          Reaction of show<span className="rojo">.</span>
        </h3>
        <form ref={form}>
          <label>
            Shows
            <select ref={show}>
              <option value="">Select itinerary</option>
              {shows.map((show) => (
                <option value={show._id} key={show._id}>
                  {show.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Name of reaction
            <input ref={name} type="text" />
          </label>
          <label>
            Active icon
            <input ref={activeIcon} type="text" />
          </label>
          <label>
            Disabled icon
            <input ref={iconBack} type="text" />
          </label>
        </form>
        <button
          className="buttonMostrarActionMycities"
          onClick={sendNewReaction}
        >
          SEND
        </button>
      </div>
      <OurToastContainer />
    </div>
  );
}

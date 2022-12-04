import React, { useRef } from "react";
import OurToastContainer from "./OurToastContainer";
import axios from "axios";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2";
import API from "../api";
import { useSelector } from "react-redux";

export default function FormNewReactions() {
  const { id } = useSelector((store) => store.userReducer); 
  let [tineraries, setTineraries] = useState([]);
  useEffect(() => {
    async function set() {
      const tineraries = await axios.get(`${API}itineraries/`);
      setTineraries(tineraries.data.searched);
    }
    set();
  }, []);

  let form = useRef();
  let name = useRef();
  let tinerary = useRef();
  let iconBack = useRef();
  let activeIcon = useRef();

  const sendNewReaction = async (event) => {
    event.preventDefault();

    const newReaction = {
      itineraryId: tinerary.current.value,
      name: name.current.value+tinerary.current.value,
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
         Reaction of tinerary<span className="rojo">.</span>
        </h3>
        <form ref={form}>
          <label>
            Itinerary
            <select ref={tinerary}>
              <option value="">Select itinerary</option>
              {tineraries.map((tinerary) => (
                <option value={tinerary._id} key={tinerary._id}>
                  {tinerary.name}
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

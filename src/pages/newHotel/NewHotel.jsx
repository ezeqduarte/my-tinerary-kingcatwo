import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import "../newHotel/newhotel.css";
import { ToastContainer, toast } from "react-toastify";
import OurToastContainer from "../../components/OurToastContainer";
import { useNavigate } from "react-router";



//Los HOOKS SOLO SE PUEDEN USAR EN COMPONENTES DE REACT
export default function NewHotel() {
  let navigate = useNavigate()
  let form = useRef();
  let nameHotel = useRef();
  let photoHotel1 = useRef();
  let photoHotel2 = useRef();
  let photoHotel3 = useRef();
  let capacityHotel = useRef();
  let descriptionHotel = useRef();
  let send = async function (object) {
  
    axios
      .post("http://localhost:8000/api/hotels/", object)
      .then((response) => {
        console.log(response.data);
        if (response.data.success === false) {
  
          
          response.data.message.map((message) => {
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
          })
  
  
  
  
  
        } else {
  
          toast.success(`${response.data.hotelCreated.name} has created successfuly`, {
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
            navigate(`/detailshotel/${response.data.hotelCreated._id}`);
          }, 3000);
  
        }

        
      })


      
      .catch((error) => {
        console.log(error.message);
      });
  };






  async function newHotel(event) {
    let newHotel = {
      name: nameHotel.current.value,
      photo: [
        photoHotel1.current.value,
        photoHotel2.current.value,
        photoHotel3.current.value,
      ],
      capacity: parseFloat(capacityHotel.current.value),
      description: descriptionHotel.current.value,
      userId: "636d1e66dbb2d08117b1c7c2",
      cityId: "636e5eb0bbea8608a2ec4f9a",
    };

    event.preventDefault();
    send(newHotel);

    form.current.reset();
  }

  return (
    <>
     <OurToastContainer></OurToastContainer>
      <div className="divTituloNewhotel">
        <h2 className="tituloNewHotel">
          Create New Hotel<span className="rojo">.</span>
        </h2>
      </div>

      <div className="newhotel">
        <form className="formNewHotel" onSubmit={newHotel} ref={form}>
          <label>
            Name of Hotel
            <input type="text" name="nameHotel" ref={nameHotel}></input>
          </label>

          <label>
            Photo 1:
            <input
              type="text"
              name="photoHotel"
              accept="image/png, image/jpeg"
              multiple
              ref={photoHotel1}
            />
          </label>
          <label>
            Photo 2:
            <input
              type="text"
              name="photoHotel"
              accept="image/png, image/jpeg"
              multiple
              ref={photoHotel2}
            />
          </label>
          <label>
            Photo 3:
            <input
              type="text"
              name="photoHotel"
              accept="image/png, image/jpeg"
              multiple
              ref={photoHotel3}
            />
          </label>

          <label>
            Capacity
            <input type="number" name="capacity" ref={capacityHotel}></input>
          </label>
          <label>
            Description
            <input
              type="text"
              name="descrpition"
              ref={descriptionHotel}
            ></input>
          </label>

          <button className="btn-newhotel">CREATE A NEW HOTEL</button>
        </form>






      </div>
    </>
  );

  
}

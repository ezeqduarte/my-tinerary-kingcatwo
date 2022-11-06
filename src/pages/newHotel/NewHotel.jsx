import React, { useRef } from "react";
import "../newHotel/newhotel.css";


export default function NewHotel() {
  let form = useRef();
  let nameHotel = useRef();
  let photoHotel = useRef();
  let capacityHotel = useRef();
  let descriptionHotel = useRef();
  let city = useRef();


  function newHotel(event) {
   

    let newHotel = {
      id: nameHotel.current.value,
      name: nameHotel.current.value,
      photo: photoHotel.current.value,
      capacity: capacityHotel.current.value,
      description: descriptionHotel.current.value,
      adminId: "admn0",
    };

    event.preventDefault();

    localStorage.setItem("newHotel", JSON.stringify(newHotel));
    form.current.reset();
  }

  return (
    <>
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
            Choose a hotel photos
            <input
              type="file"
              name="photoHotel"
              accept="image/png, image/jpeg"
              multiple
              ref={photoHotel}
            />
          </label>

          <label>
            Capacity
            <input type="text" name="capacity" ref={capacityHotel}></input>
          </label>
          <label>
            Description
            <input
              type="text"
              name="descrpition"
              ref={descriptionHotel}
            ></input>
          </label>
          <label>
            Ciudad
            <input type="text" name="ciudad" ref={city}></input>
          </label>
          <button className="btn-newhotel">CREATE A NEW HOTEL</button>
        </form>
      </div>
    </>
  );
}

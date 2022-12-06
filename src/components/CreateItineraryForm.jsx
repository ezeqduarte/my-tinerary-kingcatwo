import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import tinerariesActions from "../redux/actions/tinerariesActions";
import citiesActions from "../redux/actions/citiesActions";
import { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { toast } from "react-toastify";

export default function CreateItineraryForm() {
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.userReducer);
  const tineraries = useSelector(
    (store) => store.tineraryReducer.tinerariesUser
  );
  const { newTinerary } = tinerariesActions;
  const { getContinent } = citiesActions;

  const { continents } = useSelector((store) => store.citiesReducer);

  useEffect(() => {
    dispatch(getContinent());
  }, []);



  const form = useRef();
  const city = useRef();
  const name = useRef();
  const fphoto = useRef();
  const sphoto = useRef();
  const tphoto = useRef();
  const description = useRef();
  const duration = useRef();
  const price = useRef();

  const clear = (e) => {
    e.preventDefault();
    form.current.reset();
    Swal.fire({
      title: "Create form is clean",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      confirmButtonColor: "#ff3648",
      padding: "2rem",
    });
  };

  const sendItinerary = async (e) => {
    e.preventDefault();
    let newItinerary = {
      cityId: city.current.value,
      name: name.current.value,
      photo: [fphoto.current.value, sphoto.current.value, tphoto.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      userId: id,
    };

    try {
      const res = await dispatch(newTinerary(newItinerary));

      if (res.payload.success) {
        Swal.fire({
          title: "The tinerary has created",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          confirmButtonColor: "#ff3648",
          padding: "2rem",
        });
        form.current.reset();
      } else {
        res.payload.message.map((message) => {
          toast.error(`${message}`, {
            position: "top-left",
            autoClose: 4500,
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
      console.log("");
    }


  };

  return (
    <div className="formCityAdmin">
      <div className="h3Createcity">
        <h3>
          Create Itinerary<span className="rojo">.</span>
        </h3>
      </div>
      <form ref={form}>
        <fieldset className="newcityfieldset">
          <label>City.</label>
          <select ref={city}>
            <option value="">Choose city of tinerary</option>
            {continents.map((city) => (
              <option key={city.name} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>
          <label>
            Name.
            <input
              ref={name}
              type="text"
              placeholder="Insert name of tinerary"
            />
          </label>
          <label>
            1st photo.
            <input
              ref={fphoto}
              type="text"
              placeholder="Insert 1st photo of tinerary"
            />
          </label>
          <label>
            2nd photo.
            <input
              ref={sphoto}
              type="text"
              placeholder="Insert 2nd photo of tinerary"
            />
          </label>
          <label>
            3th photo.
            <input
              ref={tphoto}
              type="text"
              placeholder="Insert 3th photo of tinerary"
            />
          </label>
          <label>
            Description.
            <textarea ref={description} maxLength={150}></textarea>
          </label>
          <label>
            Duration.
            <input
              type="number"
              placeholder="Insert duration of tinerary"
              ref={duration}
            />
          </label>
          <label>
            Price.
            <input
              ref={price}
              type="number"
              placeholder="Insert price of tinerary"
            />
          </label>
        </fieldset>
      </form>
      <button className="formCityAdminButtons" onClick={clear}>CLEAR</button>
      <button className="formCityAdminButtons" onClick={sendItinerary}>SEND</button>
    </div>
  );
}

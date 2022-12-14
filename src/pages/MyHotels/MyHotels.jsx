import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMyCities from "../../components/CardMyCities";
import CreateCityAdmin from "../../components/CreateCityAdmin";
import EditCityAdmin from "../../components/EditCityAdmin";
import GoTo from "../../components/GoTo";
import CardMyHotels from "../../components/CardMyHotels";
import "../MyHotels/MyHotels.css";
import citiesActions from "../../redux/actions/citiesActions";
import hotelsAction from "../../redux/actions/hotelsActions";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";

export default function MyHotels() {
  const dispatch = useDispatch();
  const hotelsAdmin = useSelector((store) => store.hotelsReducer.hotelsAdmin);
  const { id, token } = useSelector((store) => store.userReducer);
  let [seeForm, setSeeForm] = useState(false);
  const see = () => {
    setSeeForm(!seeForm);
  };

  const { getHotelsAdmin, editHotelsAdmin } = hotelsAction;
  let form = useRef();
  let idd = useRef();
  let nameHotel = useRef();
  let photoHotel1 = useRef();
  let photoHotel2 = useRef();
  let photoHotel3 = useRef();
  let capacityHotel = useRef();
  let descriptionHotel = useRef();
  let idHotel = useRef()

  useEffect(() => {
    dispatch(getHotelsAdmin(id));
  }, []);

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

  const sendData = (event) => {
    event.preventDefault(); //El prevent default es para que no se actualice la pagina al mandar
    let data = {
      id: idHotel.current.value,
      objeto: {
        name: nameHotel.current.value,
        photo: [
          photoHotel1.current.value,
          photoHotel2.current.value,
          photoHotel3.current.value,
        ],
        capacity: capacityHotel.current.value,
        description: descriptionHotel.current.value,
      },
      token:token
    };
    dispatch(editHotelsAdmin(data));
    Swal.fire({
      title: "The city has modificated",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      padding: "2rem",
    });
    form.current.reset();
  };

  return (
    <>
      <div className="headerMyHotels">
        <h2>
          Look at the Hotels you created<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#MyHotels"></GoTo>
      </div>
      <div className="formMyHotels">
        <h2>
          Choose an option<span className="rojo">.</span>
        </h2>
        <div className="buttonsMycitiess">
          <NavLink to="/newhotel" style={{ textDecoration: "none" }}>
            <button className="buttonMostrarActionMycities">
              CREATE HOTEL
            </button>
          </NavLink>
          <button onClick={see} className="buttonMostrarActionMycities">
            EDIT HOTEL
          </button>
        </div>
        {seeForm ? (
          <div className="formCityAdmin">
            <h3>
              Edit Hotel<span className="rojo">.</span>
            </h3>

            <form ref={form}>
              <fieldset className="editcityfieldset">
                <label>
                  Id hotel<span className="rojo">.</span>
                  <select ref={idHotel}>
                    <option> Select Hotel </option>
                    {hotelsAdmin.map(hotel => <option value={hotel._id} key={hotel._id}>{hotel.name}</option>)}
                  </select>
                </label>
                <label>
                  Name<span className="rojo">.</span>
                  <input
                    ref={nameHotel}
                    type="text"
                    placeholder="Insert name of the hotel"
                    id="name"
                    required
                  />
                </label>

                <label>
                  Photo 1<span className="rojo">.</span>
                  <input
                    ref={photoHotel1}
                    type="text"
                    placeholder="Insert photo URL of the hotel"
                    id="photo1"
                    required
                  />
                </label>
                <label>
                  Photo 2<span className="rojo">.</span>
                  <input
                    ref={photoHotel2}
                    type="text"
                    placeholder="Insert photo URL of the hotel"
                    id="photo2"
                    required
                  />
                </label>
                <label>
                  Photo 3<span className="rojo">.</span>
                  <input
                    ref={photoHotel3}
                    type="text"
                    placeholder="Insert photo URL of the hotel"
                    id="photo3"
                    required
                  />
                </label>
                <label>
                  Description<span className="rojo">.</span>
                  <input
                    ref={descriptionHotel}
                    type="text"
                    placeholder="Description of the hotel"
                    id="description"
                    required
                  />
                </label>
                <label>
                  Capacity<span className="rojo">.</span>
                  <input
                    ref={capacityHotel}
                    type="number"
                    placeholder="Insert the capacity of the hotel"
                    id="capacity"
                    required
                  />
                </label>
              </fieldset>
              <fieldset>
                <button onClick={clear}>CLEAR</button>
                <button onClick={sendData}>SEND</button>
              </fieldset>
            </form>
          </div>
        ) : null}
      </div>
      <div className="bodyHotels" id="MyHotels">
        <h2>
          Your Hotels<span className="rojo">.</span>
        </h2>

        <div className="YourHotelsDiv">
          {hotelsAdmin.map((hotel) => (
            <CardMyHotels hotel={hotel} key={hotel.name} />
          ))}
        </div>
      </div>
    </>
  );
}

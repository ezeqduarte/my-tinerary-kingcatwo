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

export default function MyHotels() {
  const dispatch = useDispatch();
  const hotelsAdmin = useSelector((store) => store.hotelsReducer.hotelsAdmin);

  const { getHotelsAdmin, editHotelsAdmin } = hotelsAction;

  let id = useRef();
  let nameHotel = useRef();
  let photoHotel1 = useRef();
  let photoHotel2 = useRef();
  let photoHotel3 = useRef();
  let capacityHotel = useRef();
  let descriptionHotel = useRef();

  useEffect(() => {
    dispatch(getHotelsAdmin());
  }, []);

  // const [data, setData] = useState({});
  // const handleForm = (e) => {
  // setData ({...data,
  //  [ e.target.id]:e.target.value})
  // };

  const sendData = (event) => {
    event.preventDefault(); //El prevent default es para que no se actualice la pagina al mandar
    let data = {
      id: id.current.value,
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
    };

    dispatch(editHotelsAdmin(data));
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
        {/* <CreateCityAdmin /> */}

        <div className="formCityAdmin">
          <h3>
            Edit Hotel<span className="rojo">.</span>
          </h3>
          <form>
            <fieldset className="editcityfieldset">
              <label>
                Id hotel<span className="rojo">.</span>
                <input
                  ref={id}
                  type="text"
                  placeholder="Insert id of the hotel"
                  id="id"
                  required
                />
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
              <button>CLEAR</button>
              <button onClick={sendData}>SEND</button>
            </fieldset>
          </form>
        </div>
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

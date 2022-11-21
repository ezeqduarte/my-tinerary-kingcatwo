import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMyCities from "../../components/CardMyCities";
import CreateCityAdmin from "../../components/CreateCityAdmin";
import EditCityAdmin from "../../components/EditCityAdmin";
import GoTo from "../../components/GoTo";
import CardMyHotels from "../../components/CardMyHotels";
import "../MyHotels/MyHotels.css"
import citiesActions from "../../redux/actions/citiesActions";
import hotelsAction from "../../redux/actions/hotelsActions";

export default function MyHotels() {
  const dispatch = useDispatch();
  const hotelsAdmin = useSelector((store) => store.hotelsReducer.hotelsAdmin);

  const { getHotelsAdmin } = hotelsAction;

  useEffect(() => {
    dispatch(getHotelsAdmin());
  }, []);

  console.log(hotelsAdmin);

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
              type="text"
              placeholder="Insert id of the hotel"
              id="id"
            //   onChange={handleForm}
              required
            />
          </label>
          <label>
            Name<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert name of the hotel"
              id="name"
            //   onChange={handleForm}
              required
            />
          </label>
         
          <label>
            Photo 1<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo"
            //   onChange={handleForm}
              required
            />
          </label>
          <label>
            Photo 2<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo"
            //   onChange={handleForm}
              required
            />
          </label>
          <label>
            Photo 3<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo"
            //   onChange={handleForm}
              required
            />
          </label>
          <label>
            Description<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Description of the hotel"
              id="population"
            //   onChange={handleForm}
              required
            />
          </label>
          <label>
            Capacity<span className="rojo">.</span>
            <input
              type="number"
              placeholder="Insert population of the hotel"
              id="population"
            //   onChange={handleForm}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <button >CLEAR</button>
          <button >SEND</button>
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

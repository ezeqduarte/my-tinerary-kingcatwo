import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import showsActions from "../redux/actions/showsActions";

export default function CreateShow() {
  const idd = useRef();
  const name = useRef();
  const description = useRef();
  const date = useRef();
  const photo = useRef();
  const price = useRef();
  const form = useRef();
  const {createShows} = showsActions;
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelsReducer.allHotels);
  console.log(hotels)
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


  
  const send = async (e) => {
    e.preventDefault();
   

    const data = {
    
        hotelid: idd.current.value,
        name: name.current.value,
        description: description.current.value,
        photo: photo.current.value,
        price: price.current.value,
        date: date.current.value,
        userId: id,
    };
    const res =   await dispatch(showsActions.createShows(data));
    if(res.payload.success){Swal.fire({
      title: "The show has been Created",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      padding: "2rem",
    })}
 
    
  };

  return (
    <div>
      <div className="formCityAdmin">
        <h3>
         Create Show<span className="rojo">.</span>
        </h3>
        <form ref={form}>
          <fieldset className="editcityfieldset">
            <label >
              City Show<span className="rojo">.</span>
             <select ref={idd}>
                <option>Select Hotel</option>
                {hotels.map((hotel)=>   <option key={hotel.name} value={hotel._id}>{hotel.name}</option>)}
                

             </select>


            </label>
            <label>
              Name<span className="rojo">.</span>
              <input
                ref={name}
                type="text"
                placeholder="Insert name of the Show"
                id="name"
                required
              />
            </label>
            <label>
              Description<span className="rojo">.</span>
              <input
                ref={description}
                type="text"
                placeholder="Insert description of the Show"
                id="continent"
                required
              />
            </label>
            <label>
              Photo<span className="rojo">.</span>
              <input
                ref={photo}
                type="text"
                placeholder="Insert photo URL of the Show"
                id="photo"
                required
              />
            </label>
            <label>
              Date<span className="rojo">.</span>
              <input
                ref={date}
                type="date"
                placeholder="Insert date of the Show"
                id="photo"
                required
              />
            </label>
            <label>
              Price<span className="rojo">.</span>
              <input
                ref={price}
                type="number"
                placeholder="Insert price of the Show"
                id="population"
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
    </div>
  );
}

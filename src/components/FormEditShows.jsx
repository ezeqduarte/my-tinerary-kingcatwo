import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import showsActions from "../redux/actions/showsActions";

export default function FormEditShows() {
  const idd = useRef();
  const name = useRef();
  const description = useRef();
  const date = useRef();
  const photo = useRef();
  const price = useRef();
  const form = useRef();
  const {} = showsActions;
  const dispatch = useDispatch();
  const showcitos = useSelector((store) => store.showsReducer.showsReducer);
  const { id, token } = useSelector((store) => store.userReducer);


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
      id: idd.current.value,
      info: {
        name: name.current.value,
        description: description.current.value,
        photo: photo.current.value,
        price: price.current.value,
        date: date.current.value,
        userId: id
      },
      token:token
    };
 try {
  const res = await dispatch(showsActions.editShows(data));
  Swal.fire({
    title: "The show has been modificated",
    imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
    width: "25rem",
    confirmButtonColor: "#ff3648",
    padding: "2rem",
  });
  form.current.reset();
 } catch (error) {
  Swal.fire({
    title: "Please select a Show!",
    imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
    width: "25rem",
    padding: "2rem",
  });
 }
    
  };

  return (
    <div>
      <div className="formCityAdmin">
        <h3>
          Edit Show<span className="rojo">.</span>
        </h3>
        <form ref={form}>
          <fieldset className="editcityfieldset">
            <label>
              Select the Show<span className="rojo">.</span>
              <select  ref={idd}>
                <option>Select Show</option>
                {showcitos.map((show)=>   <option key={show.name} value={show._id}>{show.name}</option>)}
                

             </select>
            </label>
            <label>
              Name<span className="rojo">.</span>
              <input
                ref={name}
                type="text"
                placeholder="Insert name of the Show"
                id="name"
                required="required"
              />
            </label>
            <label>
              Description<span className="rojo">.</span>
              <input
                ref={description}
                type="text"
                placeholder="Insert continent of the Show"
                id="continent"
                required="required"
              />
            </label>
            <label>
              Photo<span className="rojo">.</span>
              <input
                ref={photo}
                type="text"
                placeholder="Insert photo URL of the Show"
                id="photo"
                required="required"
              />
            </label>
            <label>
              Date<span className="rojo">.</span>
              <input
                ref={date}
                type="date"
                placeholder="Insert date of the Show"
                id="photo"
                required="required"
              />
            </label>
            <label>
              Price<span className="rojo">.</span>
              <input
                ref={price}
                type="number"
                placeholder="Insert price of the Show"
                id="population"
                required="required"
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

import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import showsActions from "../redux/actions/showsActions";

export default function FormEditShows() {
  const id = useRef();
  const name = useRef();
  const description = useRef();
  const date = useRef();
  const photo = useRef();
  const price = useRef();
  const form = useRef();
  const {} = showsActions;
  const dispatch = useDispatch();


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

  const send = (e) => {
    e.preventDefault();
    const data = {
      id: id.current.value,
      info: {
        name: name.current.value,
        description: description.current.value,
        photo: photo.current.value,
        price: price.current.price,
        date: date.current.date,
      },
    };
    dispatch(showsActions.editShows(data));
    Swal.fire({
      title: "The city has modificated",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      padding: "2rem",
    });
    form.current.reset();
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
              Id Show<span className="rojo">.</span>
              <input
                ref={id}
                type="text"
                placeholder="Insert id of the Show"
                id="id"
                required
              />
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
                placeholder="Insert continent of the Show"
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

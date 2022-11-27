import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import tinerariesActions from "../redux/actions/tinerariesActions";

export default function FormEditTinerary() {
  const id = useRef();
  const name = useRef();
  const form = useRef();
  const description = useRef();
  const photo1 = useRef();
  const photo2 = useRef();
  const photo3 = useRef();
  const price = useRef();
  const duration = useRef();
  const { editTinerary } = tinerariesActions;
  const dispatch = useDispatch();
  const { tinerariesUser } = useSelector((store) => store.tineraryReducer);

  const clear = (e) => {
    e.preventDefault();
    form.current.reset();
    Swal.fire({
      title: "The edit form is clean",
      imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
      width: "25rem",
      padding: "2rem",
    });
  };

  const send = (e) => {
    if (
      id.current.value !== "" &&
      name.current.value !== "" &&
      description.current.value !== "" &&
      photo1.current.value !== "" &&
      photo2.current.value !== "" &&
      photo3.current.value !== "" &&
      duration.current.value !== 0
    ) {
      const data = {
        id: id.current.value,
        info: {
          name: name.current.value,
          description: description.current.value,
          photo: [
            photo1.current.value,
            photo2.current.value,
            photo3.current.value,
          ],
          price: price.current.value,
          duration: duration.current.value,
        },
      };

      console.log(data);

      dispatch(editTinerary(data));

      Swal.fire({
        title: "The tinerary has modificated",
        imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
        width: "25rem",
        padding: "2rem",
      }).then(form.current.reset());
    } else {
      Swal.fire({
        title: "Cant modificate. Please complete all camps",
        imageUrl:
          "https://img.icons8.com/sf-black-filled/120/null/multiply.png",
        width: "25rem",
        padding: "2rem",
      });
    }
  };

  return (
    <div className="formtineraryAdmin">
      <h3>
        Edit tinerary<span className="rojo">.</span>
      </h3>
      <form ref={form}>
        <fieldset className="edittineraryfieldset">
          <label>Itinerary.</label>
          <select ref={id}>
            <option value="">Choose itinerary</option>
            {tinerariesUser.map((tinerary) => (
              <option key={tinerary.name} value={tinerary._id}>
                {tinerary.name}
              </option>
            ))}
          </select>
          <label>
            Name<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert name of the tinerary"
              id="name"
              ref={name}
              /*  onChange={handleForm} */
              required
            />
          </label>
          <label>
            Photo 1<span className="rojo">.</span>
            <input
              ref={photo1}
              type="text"
              placeholder="Insert photo URL of the tinerary"
              id="photo"
              /*  onChange={handleForm} */
              required
            />
          </label>
          <label>
            Photo 2<span className="rojo">.</span>
            <input
              ref={photo2}
              type="text"
              placeholder="Insert photo URL of the tinerary"
              id="photo"
              /*  onChange={handleForm} */
              required
            />
          </label>
          <label>
            Photo 3<span className="rojo">.</span>
            <input
              ref={photo3}
              type="text"
              placeholder="Insert photo URL of the tinerary"
              id="photo"
              /*  onChange={handleForm} */
              required
            />
          </label>
          <label>
            Description.
            <textarea ref={description} maxLength={150}></textarea>
          </label>
          <label>
            Duration<span className="rojo">.</span>
            <input
              ref={duration}
              type="number"
              placeholder="Insert duration of the tinerary"
              id="duration"
              /*  onChange={handleForm} */
              required
            />
          </label>
          <label>
            Price<span className="rojo">.</span>
            <input
              ref={price}
              type="number"
              placeholder="Insert price of the tinerary"
              id="price"
              /*  onChange={handleForm} */
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
  );
}

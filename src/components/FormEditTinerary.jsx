import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
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

  const clear = (e) => {
    e.preventDefault();
    form.current.reset();
  };

  const send = (e) => {
    e.preventDefault();

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
        duration: duration.value,
      },
    };

    dispatch(editTinerary(data));
  };

  return (
    <div className="formtineraryAdmin">
      <h3>
        Edit tinerary<span className="rojo">.</span>
      </h3>
      <form ref={form}>
        <fieldset className="edittineraryfieldset">
          <label>
            Id tinerary<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert id of the tinerary"
              id="id"
              /*  onChange={handleForm} */
              required
              ref={id}
            />
          </label>
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
            Description<span className="rojo">.</span>
            <input
              ref={description}
              type="text"
              placeholder="Insert Description of the tinerary"
              id="Description"
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
        </fieldset>
        <fieldset>
          <button onClick={clear}>CLEAR</button>
          <button onClick={send}>SEND</button>
        </fieldset>
      </form>
    </div>
  );
}

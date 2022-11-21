import React from "react";
import { useRef } from "react";

export default function EditCityAdmin() {
  let form = useRef()

  const clear = (event) => {

    event.preventDefault()
    form.current.reset()

  }

  const send = (event) => {

    event.preventDefault()

  }

  return (
    <div className="formCityAdmin">
      <h3>
        Edit City<span className="rojo">.</span>
      </h3>
      <form ref={form}>
        <fieldset className="editcityfieldset">
          <label>
            Id city<span className="rojo">.</span>
            <input type="text" />
          </label>
          <label>
            Name<span className="rojo">.</span>
            <input type="text" />
          </label>
          <label>
            Continent<span className="rojo">.</span>
            <input type="text" />
          </label>
          <label>
            Photo<span className="rojo">.</span>
            <input type="text" />
          </label>
          <label>
            Population<span className="rojo">.</span>
            <input type="number" />
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

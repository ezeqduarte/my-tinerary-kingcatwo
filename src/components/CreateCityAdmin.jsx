import React from "react";
import { useRef } from "react";

export default function CreateCityAdmin() {

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
      <div className="h3Createcity">
        <h3>
          Create City<span className="rojo">.</span>
        </h3>
      </div>
      <form ref={form}>
        <fieldset className="newcityfieldset">
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

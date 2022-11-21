import React from "react";

export default function EditCityAdmin() {
  return (
    <div className="formCityAdmin">
      <h3>
        Edit City<span className="rojo">.</span>
      </h3>
      <form>
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
            <input type="text" />
          </label>
        </fieldset>
        <fieldset>
          <button>CLEAR</button>
          <button>SEND</button>
        </fieldset>
      </form>
    </div>
  );
}

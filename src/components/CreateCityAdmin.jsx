import React from "react";

export default function CreateCityAdmin() {
  return (
    <div className="formCityAdmin">
      <div className="h3Createcity">
        <h3>
          Create City<span className="rojo">.</span>
        </h3>
      </div>
      <form>
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

import React from 'react'

export default function FormEditShows() {
  return (
    <div>

<div className="formCityAdmin">
      <h3>
        Edit Show<span className="rojo">.</span>
      </h3>
      <form >
        <fieldset className="editcityfieldset">
          <label>
            Id Show<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert id of the Show"
              id="id"
              
              required
            />
          </label>
          <label>
            Name<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert name of the Show"
              id="name"
              
              required
            />
          </label>
          <label>
            Description<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert continent of the Show"
              id="continent"
              
              required
            />
          </label>
          <label>
            Photo<span className="rojo">.</span>
            <input
              type="text"
              placeholder="Insert photo URL of the Show"
              id="photo"
              
              required
            />
          </label>
          <label>
            Date<span className="rojo">.</span>
            <input
              type="date"
              placeholder="Insert date of the Show"
              id="photo"
              
              required
            />
          </label>
          <label>
            Price<span className="rojo">.</span>
            <input
              type="number"
              placeholder="Insert price of the Show"
              id="population"
              
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <button >CLEAR</button>
          <button>SEND</button>
        </fieldset>
      </form>
    </div>





























        
    </div>
  )
}

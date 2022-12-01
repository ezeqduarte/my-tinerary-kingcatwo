import React from "react";
import { useState } from "react";
import FormNewReactions from "../components/FormNewReactions";

export default function NewReaction() {
  let [formActive, setFormActive] = useState(false);
  const formActiveClick = (e) => {
    setFormActive(!formActive);
  };

  return (
    <>
      <div className="buttonsReactions">
        <button
          className="buttonMostrarActionMycities"
          onClick={formActiveClick}
        >
          New reaction
        </button>
      </div>
      <div className="newReaction">
        {formActive ? <FormNewReactions /> : <null />}
      </div>
    </>
  );
}

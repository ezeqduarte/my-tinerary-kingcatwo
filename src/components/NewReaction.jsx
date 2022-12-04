import React from "react";
import { useState } from "react";
import FormNewReactions from "../components/FormNewReactions";
import NewReactionShows from "./NewReactionShows";

export default function NewReaction() {
  return (
    <>
      <div className="buttonsReactions">
        <h3>Create new reactions<span className="rojo">.</span></h3>
      </div>
      <div className="newReaction">
        <FormNewReactions /> <NewReactionShows /> 
      </div>
    </>
  );
}

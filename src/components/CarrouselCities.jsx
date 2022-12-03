import React, { useState, useEffect } from "react";
import places from "../data/cities";

export default function CarrouselCities() {
  let [numberPhotoToChange, setnumberPhotoToChange] = useState(0);
  let [id, setId] = useState(0);
  useEffect(() => {
    let idInterval = setInterval(
      () => {
        siguiente();
      },

      4000
    );
    setId(idInterval);
    return clearInterval(id);
  }, [numberPhotoToChange]);

  let anterior = function () {
    if (numberPhotoToChange > 0) {
      setnumberPhotoToChange(--numberPhotoToChange);
    } else {
      setnumberPhotoToChange(2);
    }
    clearInterval(id);
  };

  let siguiente = function () {
    if (numberPhotoToChange < 2) {
      setnumberPhotoToChange(++numberPhotoToChange);
    } else {
      setnumberPhotoToChange(0);
    }
  };

  return (
    <div className="carrouselEstilo">
      <button className="botonCarrousel2" onClick={anterior}></button>

      <div className="imagenesCarrousel">
        <div>
          <img src={places[0 + numberPhotoToChange].photo} />
        </div>
        <div>
          <img src={places[1 + numberPhotoToChange].photo} />
        </div>
        <div>
          <img src={places[2 + numberPhotoToChange].photo} />
        </div>
        <div>
          <img src={places[3 + numberPhotoToChange].photo} />
        </div>
      </div>

      <button className="botonCarrousel" onClick={siguiente}></button>
    </div>
  );
}

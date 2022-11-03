import React, { useEffect, useState } from "react";
import hotels from "../data/hotels";

export default function Carrousel() {
  let [numberPhotoToChange, setnumberPhotoToChange] = useState(0);
  let [id, setId] = useState(0);
  useEffect(() => {
    let idInterval = setInterval(
      () => {
        siguiente();
      
      },

      2800
    );
    setId(idInterval);
    return clearInterval(id);
  }, [numberPhotoToChange]);

  let anterior = function () {
    if (numberPhotoToChange > 0) {
      setnumberPhotoToChange(--numberPhotoToChange);
    } else {
      setnumberPhotoToChange(hotels[0].photo.length - 1);
    }
    clearInterval(id);
  };

  let siguiente = function () {
    if (numberPhotoToChange < hotels[0].photo.length - 1) {
      setnumberPhotoToChange(++numberPhotoToChange);
    } else {
      setnumberPhotoToChange(0);
    }
    clearInterval(id);
  };

  return (
    <div className="carrouselEstilo">
      <button className="botonCarrousel2" onClick={anterior}></button>

      <div className="imagenesCarrousel">
        <div>
          <img src={hotels[0].photo[numberPhotoToChange]} alt="" srcset="" />
        </div>
        <div>
          <img src={hotels[1].photo[numberPhotoToChange]} alt="" srcset="" />
        </div>
        <div>
          <img src={hotels[2].photo[numberPhotoToChange]} alt="" srcset="" />
        </div>
        <div>
          <img src={hotels[3].photo[numberPhotoToChange]} alt="" srcset="" />
        </div>
      </div>

      <button className="botonCarrousel" onClick={siguiente}></button>
    </div>
  );
}

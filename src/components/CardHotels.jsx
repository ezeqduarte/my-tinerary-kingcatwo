import React from "react";
import { NavLink } from "react-router-dom";

export default function CardHotels(props) {
  let { hotel } = props;
  return (
    <div className="cardCity">
      <div className="imgCard">
        <img src={hotel.photo[0]} alt="{hotel.name}" />
      </div>
      <h4>{hotel.name}</h4>
      <NavLink
        to={`/detailshotel/${hotel._id}`}
        className="btn-details"
        style={{ textDecoration: "none" }}
      >
        <div className="btn-details">
          <p>More details</p>
        </div>
      </NavLink>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function CardMyCities(props) {
  let { city } = props;
  return (
    <div className="cardMyCities">
      <div className="imgCard">
        <img src={city.photo} alt="{city.name}" />
      </div>
      <h4>{city.name}</h4>
      <h5 className="adminId">Admin: {city.userId._id}</h5>
      <h5 className="cityId">City: {city._id}</h5>
      <div className="btn-details">
        <NavLink
          to={`/details/${city._id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>More details</p>
        </NavLink>
      </div>
    </div>
  );
}

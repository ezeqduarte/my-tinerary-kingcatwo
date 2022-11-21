import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import citiesActions from "../redux/actions/citiesActions";

export default function CardMyCities(props) {
  let { city } = props;
  const dispatch = useDispatch()
  const { deleteCityAdmin } = citiesActions;

  function click() {
    Swal.fire({
      title: "Are you sure of deleted this city?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width:"25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#3085d1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "The city has deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width:"25rem",
          padding: "2rem",
        });
        
        dispatch(deleteCityAdmin({id: city._id}))

      }
    });
  }
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
      <div className="btn-delete">
        <img
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
          onClick={click}
          alt={`${city._id}`}
        />
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import hotelsAction from "../redux/actions/hotelsActions";
import Swal from "sweetalert2";

export default function CardMyHotels(props) {
  const hotel = props.hotel;
  const deleteHotelsAdmin = hotelsAction.deleteHotelsAdmin;
  const dispatch = useDispatch();

  const id = hotel._id;
  let click = async function () {
    Swal.fire({
      title: "Are you sure to delate this hotel?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteHotelsAdmin({ id: id }));
        Swal.fire({
          title: "The hotel was deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      }
    });
  };
  return (
    <div className="cardMyCities">
      <div className="imgCard">
        <img src={hotel.photo[0]} alt={hotel.name} />
      </div>
      <h4>{hotel.name}</h4>
      <h5 className="adminId">
        Created by {hotel.userId.name || hotel.name}{" "}
        {hotel.userId.lastName || hotel.lastName}
      </h5>
     
      <div className="btn-details">
        <NavLink
          to={`/detailshotel/${hotel._id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>More details</p>
        </NavLink>
      </div>
      <div className="btn-delete">
        <img
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
          onClick={click}
          alt={`${hotel._id}`}
        />
      </div>
    </div>
  );
}

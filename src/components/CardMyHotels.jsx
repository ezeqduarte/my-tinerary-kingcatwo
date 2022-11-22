import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import hotelsAction from "../redux/actions/hotelsActions";
import Swal from "sweetalert2";


export default function CardMyHotels(props) {
  const hotel = props.hotel;
  const deleteHotelsAdmin = hotelsAction.deleteHotelsAdmin
  const dispatch = useDispatch();








  
  const id = hotel._id
let click = async function () {
  Swal.fire({
    title: "Are you sure to delate this hotel?",
    imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
    width: "25rem",
    padding: "2rem",
    showCancelButton: true,
    confirmButtonColor: "#eb3a34",
    cancelButtonColor: "#5e5b5b",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "The hotel was deleted",
        imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
        width: "25rem",
        padding: "2rem",
      });

      dispatch(  deleteHotelsAdmin ( { id: id }));
    }
  });


  }
  return (
    <div className="cardMyCities">
      <div className="imgCard">
        <img src={hotel.photo[0]} alt={hotel.name} />
      </div>
      <h4>{hotel.name}</h4>
      <h5 className="adminId">Admin: {hotel.userId._id || hotel.userId}</h5>
      <h5 className="hotelId">hotel: {hotel._id}</h5>
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

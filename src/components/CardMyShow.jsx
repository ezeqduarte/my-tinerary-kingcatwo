import React from "react";
import { useDispatch } from "react-redux";
import showsActions from "../redux/actions/showsActions";
import Swal from "sweetalert2";

export default function CardMyShow(props) {
  const city = props.city;
  const dispatch = useDispatch();
  const { deleteShows } = showsActions;
  const click = async () => {
    Swal.fire({
      title: "Are you sure to delete this tinerary?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteShows({ id: city._id }));
        Swal.fire({
          title: "The tinerary has deleted",
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
        <img src={city.photo} alt="{city.name}" />
      </div>
      <h4>{city.name}</h4>
      <h5 className="adminId">
        Created by {city.userId.name || city.name}{" "}
        {city.userId.lastName || city.lastName}
      </h5>
      <h5 className="cityId">Show: {city._id}</h5>
      <div className="btn-details">
        <p>$ {city.price}</p>
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

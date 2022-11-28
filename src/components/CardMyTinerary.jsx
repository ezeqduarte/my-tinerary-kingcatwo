import React from "react";
import { useDispatch } from "react-redux";
import tinerariesActions from "../redux/actions/tinerariesActions";
import Swal from "sweetalert2";

export default function CardMyTinerary(props) {
  const { itinerary } = props;
  const dispatch = useDispatch();
  const { deleteTinerary } = tinerariesActions;

  const click = async () => {
    Swal.fire({
      title: "Are you sure to delete this tinerary?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#eb3a34",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(deleteTinerary({ id: itinerary._id }));
        Swal.fire({
          title: "The tinerary has deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      }
    });
  };
  console.log(itinerary);

  return (
    <div className="cardMyCities">
      <div className="imgCard">
        <img src={itinerary.photo[0]} alt={itinerary.name} />
      </div>
      <h4>{itinerary.name}</h4>
      <h5 className="adminId">
        Created by {itinerary.userId.name} {itinerary.userId.lastName}
      </h5>
      <h5 className="itineraryId">Tinerary: {itinerary._id}</h5>
      <div className="btn-details">
        <p>Price: $ {itinerary.price}</p>
      </div>
      <div className="btn-delete">
        <img
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
          onClick={click}
          alt={`${itinerary._id}`}
        />
      </div>
    </div>
  );
}

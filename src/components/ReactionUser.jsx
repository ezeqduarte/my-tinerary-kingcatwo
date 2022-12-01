import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function ReactionUser({ reaction }) {
  const { token } = useSelector((store) => store.userReducer);
  let { _id, itineraryId } = reaction;
  const dispatch = useDispatch();
  const { deleteReaction } = reactionsActions;

  const deleteReactionFunction = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Are you sure to delete this reaction in ${itineraryId.name}?`,
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteReaction({ token, id: _id }));
        Swal.fire({
          title: "The reaction has deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      }
    });
  };

  return (
    <div className="ReactionUser999">
      <img src={reaction.itineraryId.photo[0]} alt="" />
      <div className="infoReaction99">
        <p className="negrita99">{reaction.itineraryId.name}</p>

        <p>Your reaction in the {reaction.itineraryId.name} was </p>

        <img src={reaction.icon} alt="" />
      </div>
      <button onClick={deleteReactionFunction} className="btn-details">
        DELETE
      </button>
    </div>
  );
}

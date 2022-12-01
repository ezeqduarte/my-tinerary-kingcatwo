import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../api";
import reactionsActions from "../redux/actions/reactionsActions";

export default function LikeDislike(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  let { reaction: reactionProp, itineraryId, setReload, reload } = props;
  let [reaction, setReaction] = useState(reactionProp);
  const { likeDislike } = reactionsActions;

  const dispatch = useDispatch();

  console.log(itineraryId);
  /* console.log(reactionProp.name);  */

  const like = async (e) => {
    const res = await dispatch(
      likeDislike({
        token: token,
        id: itineraryId,
        name: reactionProp.name,
      }),
      /* setReload(!reload) */
    );

    console.log(res);

    console.log(res.payload.reaction);
    setReaction(res.payload.reaction);
    /* setReload(!reload) */

    /* setReload(!reload); */
    /* console.log(reaction.ItineraryId); */

  };



  /* console.log(reaction);
  console.log(props); */

  return (
    <div className="rowReactions99">
      <p>{reaction.userId.length}</p>
      <img
        onClick={like}        
        src={reaction?.userId.includes(id) ? reaction.icon : reaction.iconBack}
        alt={reaction._id}
      />
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../api";
import reactionsActions from "../redux/actions/reactionsActions";

export default function LikeDislikeShow(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  let { reaction: reactionProp, itineraryId: showId } = props;
  let [reaction, setReaction] = useState(reactionProp);
  const { likeDislike } = reactionsActions;

  const dispatch = useDispatch();

  const like = async (e) => {
    const res = await dispatch(
      likeDislike({
        token: token,
        id: showId,
        name: reactionProp.name,
      })
      
    );

    setReaction(res.payload.reaction);
  };

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

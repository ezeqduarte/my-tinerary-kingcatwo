import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import LikeDislike from "./LikeDislike";

export default function Reaction(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let { itinerary } = props;
  let { likeDislike } = reactionsActions;
  let [reactionss, setReactionss] = useState([]);
  

  const { reactions } = reactionsActions;


  async function reactionsfunction() {
    const res = await dispatch(reactions({id: itinerary, token: token}));
    setReactionss(res.payload.reactions);
  }

  useEffect(() => {
    reactionsfunction();
  }, []);


 

  return (
    <div className="rowReactions99">
      {reactionss.map((reaction) => (
       <LikeDislike reaction={reaction}  key={reaction._id}  itineraryId={itinerary}></LikeDislike>
      ))}
    </div>
  );
}

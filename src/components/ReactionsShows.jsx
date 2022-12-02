import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import LikeDislike from "./LikeDislike";

export default function ReactionsShows(props) {


  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let { itinerary: show } = props;
  let { likeDislike } = reactionsActions;
  let [reactionss, setReactionss] = useState([]);
  console.log(id);

  const { reactionsShow } = reactionsActions;
  console.log(token);

  async function reactionsfunction() {
    const res = await dispatch(reactionsShow({ id: show, token: token }));
    setReactionss(res.payload.reactions);
  }

  console.log(reactionss);

  useEffect(() => {
    reactionsfunction();
  }, []);

  return (
    <div className="rowReactions99">
      {reactionss.map((reaction) => (
        <LikeDislike
          reaction={reaction}
          key={reaction._id}
          itineraryId={show}
        ></LikeDislike>
      ))}
    </div>
  );
}

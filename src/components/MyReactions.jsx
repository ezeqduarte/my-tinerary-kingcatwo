import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import ReactionsUserShows from "../components/ReactionsUserShows";
import ReactionUser from "./ReactionUser";

export default function MyReactions() {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { getReactionsOfUser } = reactionsActions;
  const { allReactionsOfUser } = useSelector((store) => store.reactionsReducer);
  

  useEffect(() => {
    dispatch(getReactionsOfUser({ id, token }));
  }, []);

  const reactionsShows = allReactionsOfUser.filter(
    (reaction) => reaction.userId === null
  );

  const reactionsOfTineraries = allReactionsOfUser.filter(
    (reaction) => reaction.itineraryId
  );
  

  const reactionsOfShows = allReactionsOfUser.filter(
    (reaction) => reaction.showId
  );

 

  return (
    <>
      <h3>
        Your reactions of tineraries are here<span className="rojo">.</span>
      </h3>
      <div className="ContainerReactionUser999">
        {reactionsOfTineraries.length > 0 ? (
          reactionsOfTineraries.map((reaction) => (
            <ReactionUser key={reaction._id} reaction={reaction} />
          ))
        ) : (
          <h2>You dont have reactions of Tineraries</h2>
        )}
      </div>
      <h3>
        Your reactions of shows are here<span className="rojo">.</span>
      </h3>
      <div className="ContainerReactionUser999">
        {reactionsOfShows.length > 0 ? (
          reactionsOfShows.map((reaction) => (
            <ReactionsUserShows key={reaction._id} reaction={reaction} />
          ))
        ) : (
          <h2>You dont have reactions of Tineraries</h2>
        )}
      </div>
      
    </>
  );
}

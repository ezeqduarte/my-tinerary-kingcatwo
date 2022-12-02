import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import ReactionUser from "./ReactionUser";

export default function MyReactions() {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { getReactionsOfUser } = reactionsActions;
  const { allReactionsOfUser } = useSelector((store) => store.reactionsReducer);
  console.log(allReactionsOfUser);

  useEffect(() => {
    dispatch(getReactionsOfUser({ id, token }));
  }, []);

  const reactionsShows = allReactionsOfUser.filter(
    (reaction) => reaction.userId === null
  );

  const reactionsOfTineraries = allReactionsOfUser.filter(
    (reaction) => reaction.itineraryId
  );
  console.log(reactionsOfTineraries);

  return (
    <>
      <h3>
        Your reactions of tineraries are here<span className="rojo">.</span>
      </h3>
      <div className="ContainerReactionUser999">
        {reactionsOfTineraries.length > 0 ? (
          reactionsOfTineraries.map((reaction) => (
            <ReactionUser reaction={reaction} />
          ))
        ) : (
          <h2>You dont have reactions of Tineraries</h2>
        )}
      </div>
    </>
  );
}

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
  

  useEffect(() => {
    dispatch(getReactionsOfUser({ id, token }));
  }, []);

  return (
    <>
      <h3>Your reactions are here<span className="negrita99 rojo">:</span></h3>
      <div className="ContainerReactionUser999">
        {allReactionsOfUser.length>0 ?allReactionsOfUser.map((reaction) => (
          <ReactionUser reaction={reaction} />
        ))
        : <h2>You dont have reactions</h2>
        }
      </div>
    </>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function Reaction(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let { reaction, reload, setReload } = props;
  let { itineraryId, userId } = reaction;
  let { likeDislike } = reactionsActions;

  const like = async () => {
    dispatch(
      likeDislike({
        token: token,
        ItineraryId: itineraryId,
        name: reaction.name,
      })
    );
    console.log(reaction.ItineraryId);
    setReload(!reload)
  };
  console.log(props);
  console.log(itineraryId);

  return (
    <div>
      {userId.includes(id) ? (
        <img onClick={like} src={reaction.icon} alt={reaction._id} />
      ) : (
        <img onClick={like} src={reaction.iconBack} alt={reaction._id} />
      )}
    </div>
  );
}

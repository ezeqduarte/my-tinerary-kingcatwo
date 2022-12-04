import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import events from "../data/events";
import Comments from "./Comments";
import NewComment from "./NewComment";
import commentsActions from "../redux/actions/commentsActions";
import Reaction from "./Reaction";
import ReactionsShows from "./ReactionsShows";

export default function ItineraryEvents(props) {
  let object = props.object;
  let { refresh } = useSelector((store) => store.commentsReducer);
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  let [open, setOpen] = useState(true);

  let { getComments } = commentsActions;
  let [comments, setComments] = useState([]);
  let [mostrarComentarios, setMostrarComentarios] = useState(false);
  
  let [newcomment, setnewcomment] = useState(false);
  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };
  useEffect(() => {
    async function peticion99() {
      const res = await dispatch(getComments(object._id));
      setComments(res.payload.commentsItineraries);
    }
    peticion99();
  }, [refresh]);
  const createComment = (e) => {
    setnewcomment(!newcomment);
    setOpen(!open);
  };

  return (
    <>
      <div className="ContenedorGeneral99">
        <div className="divReactionImg">
          <ReactionsShows itinerary={object._id}></ReactionsShows>
        </div>
        <div className="CardGigante99">
          <div className="imgCardGigante99">
            <img src={object.photo} alt="" srcset="" />
          </div>
          <div className="infoCardGigante99">
            <h3>
              <span className="rojo">|</span>
              {object.name}
            </h3>
            <p>{object.description}</p>
            <div className="pd99">
              <p>
                {" "}
                <span className="negrita99">Price:</span> ${object.price}
              </p>
              <p>
                {" "}
                <span className="negrita99">Date:</span>{" "}
                {object.date.slice(0, 10)}
              </p>
            </div>
            <button className="btn-details" onClick={change}>
              See the Comments
            </button>
          </div>
        </div>
      </div>
      {mostrarComentarios ? (
        <>
          <div className="comments99">
            {open ? (
              <div className="buttonNewComment00">
                <div className="newComment" onClick={createComment}>
                  <p>+</p>
                </div>
              </div>
            ) : (
              <div className="buttonNewComment00">
                <div className="newComment" onClick={createComment}>
                  <p>x</p>
                </div>
              </div>
            )}
            {newcomment ? (
              <NewComment
                itinerary={object._id}
                reload={reload}
                setreload={setReload}
              ></NewComment>
            ) : null}

            {comments?.map((comment) => (
              <Comments comment={comment}></Comments>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

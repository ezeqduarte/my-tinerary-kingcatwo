import axios from "axios";
import commentsActions from "../redux/actions/commentsActions";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import hotels from "../data/hotels";
import Reaction from "./Reaction";
import Comments from "./Comments";
import NewComment from "./NewComment";

export default function ItineraryCard(props) {
  let { itinerary, reload, setReload } = props;
  const dispatch = useDispatch();
  
  let { getComments } = commentsActions;
  let [comments, setComments] = useState([]);
  let [mostrarComentarios, setMostrarComentarios] = useState(false);
  console.log(comments);
  let [newcomment, setnewcomment] = useState(false);
  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };
  useEffect(() => {
    async function peticion99() {
      const res = await dispatch(getComments(itinerary._id));
      setComments(res.payload.commentsItineraries);
    }
    peticion99();
    // console.log(res.payload)
  }, []);
  const createComment = (e) => {
    setnewcomment(!newcomment);
  };

  return (
    <>
      <div className="ContenedorGeneral99">
        <div className="divReactionImg">
          <Reaction itinerary={itinerary._id}></Reaction>
        </div>
        <div className="CardGigante99">
          <div className="imgCardGigante99">
            <img src={itinerary.photo[0]} alt="" srcset="" />
          </div>
          <div className="infoCardGigante99">
            <h3>
              <span className="rojo">|</span>
              {itinerary.name}
            </h3>
            <p>{itinerary.description}</p>
            <div className="pd99">
              <p>
                {" "}
                <span className="negrita99">Price:</span> ${itinerary.price}
              </p>
              <p>
                {" "}
                <span className="negrita99">Duration:</span>{" "}
                {itinerary.duration}hs
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
            <div className="newComment" onClick={createComment}>
              +
            </div>
            {newcomment ? (
              <NewComment itinerary={itinerary._id}></NewComment>
            ) : null}
            <h3> Create a new comment!</h3>

            {comments?.map((comment) => (
              <Comments comment={comment}></Comments>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

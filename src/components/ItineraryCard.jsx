import axios from "axios";
import commentsActions from "../redux/actions/commentsActions";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import hotels from "../data/hotels";
import Reaction from "./Reaction";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function ItineraryCard(props) {
  let { itinerary } = props;
  const dispatch = useDispatch();
  const [reload, setReload] = useState(true);
  let { refresh } = useSelector((store) => store.commentsReducer);

  let { getComments } = commentsActions;
  let [comments, setComments] = useState([]);
  let [mostrarComentarios, setMostrarComentarios] = useState(false);
  let [open, setOpen] = useState(true);

  let [newcomment, setnewcomment] = useState(false);
  let change = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  async function peticion99() {
    const res = await dispatch(getComments(itinerary._id));
    setComments(res.payload.commentsItineraries);
  }

  useEffect(() => {
    peticion99();
  }, [refresh]);

  const createComment = (e) => {
    setnewcomment(!newcomment);
    setOpen(!open);
  };

  let textarea = useRef();

  const date = "2024-12-15T00:30:00.000Z";

  const { postComments } = commentsActions;
  const { id, token, logged } = useSelector((store) => store.userReducer);

  const sendComment = (e) => {
    let newCommentObject2 = {
      comment: textarea.current.value,
      userId: id,
      itineraryId: itinerary,
      date: date,
    };

    if (logged === false) {
      Swal.fire({
        title: "You have to be logged to post!",
        imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
        width: "25rem",
        padding: "2rem",

        confirmButtonColor: "#ff3648",
        cancelButtonColor: "#5e5b5b",

        confirmButtonText: "Understand!",
      });
      return;
    }
    Swal.fire({
      title: "Do you want to post this comment?",
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      cancelButtonText: "Not really",
      confirmButtonText: "Yes, post it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(
          postComments({ token: token, newCommentObject: newCommentObject2 })
        );
        Swal.fire({
          title: "Thanks you!",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
        /* textarea.current.reset(); */
        setReload(!reload);
      }
    });
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
              <div>
                <textarea
                  className="textArea99"
                  ref={textarea}
                  placeholder={"Write your comment here!"}
                ></textarea>
                <button className="button102" onClick={sendComment}>
                  Send Comment
                </button>
              </div>
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

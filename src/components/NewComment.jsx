import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import commentsActions from "../redux/actions/commentsActions";


export default function NewComment(props) {
  
  let textarea = useRef();
  let { itinerary, reload, setreload } = props;
  const dispatch = useDispatch();
  const date = "2024-12-15T00:30:00.000Z";
  const { id:idcity } = useParams();
  const { postComments } = commentsActions;
  const { id, token, logged } = useSelector((store) => store.userReducer);
    const sendComment = (e) => {
    let newCommentObject2 = {
      comment: textarea.current.value,
      userId: id,
      itineraryId: itinerary,
      date: date,
    };

    if (logged === false){

      Swal.fire({
        title: "You have to be logged to post!",
        imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
        width: "25rem",
        padding: "2rem",
    
        confirmButtonColor: "#ff3648",
        cancelButtonColor: "#5e5b5b", 
      
        confirmButtonText: "Understand!",
      })
      return

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
        textarea.current.reset()
        setreload(!reload)
        
      }

    });
  };
  return (
    <div className="divNewComment">
      <textarea
        className="textArea99"
        ref={textarea}
        placeholder={"Write your comment here!"}
      ></textarea>
      <button className="button102" onClick={sendComment}>
        Send Comment
      </button>
    </div>
  );
}

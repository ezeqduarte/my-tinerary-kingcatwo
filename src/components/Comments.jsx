import React from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function Comments(props) {
  let { logged, id, token } = useSelector((store) => store.userReducer);
  let { comment } = props;
  let { deleteComment } = commentsActions;

  const dispatch = useDispatch();

  const deletedComment = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Are you sure to delete this comment?`,
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteComment({ token: token, id: comment._id }));
        Swal.fire({
          title: "The comment has deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      }
    });
  };

  return (
    <>
      {comment.userId.logged ? (
        <div className="comments100logged">
          <img src={comment.userId.photo} className="photo100logged"></img>

          <p className="parrafo101">
            {comment.userId.name} {comment.userId.lastName}
          </p>
          <p className="parrafo100">{comment.comment}</p>
          <div className="iconitos100">
            {comment.userId._id === id ? (
              <>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/CCC6C6/pencil-tip.png"
                  alt=""
                  srcset=""
                />
                <img
                  src="https://img.icons8.com/ios-glyphs/30/CCC6C6/multiply.png"
                  alt=""
                  srcset=""
                  onClick={deletedComment}
                />{" "}
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="comments100">
          <img src={comment.userId.photo} className="photo100"></img>

          <p className="parrafo101">
            {comment.userId.name} {comment.userId.lastName}
          </p>
          <p className="parrafo100">{comment.comment}</p>
          <div className="iconitos100"></div>
        </div>
      )}
    </>
  );
}
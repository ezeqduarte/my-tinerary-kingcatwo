import React from "react";
import { useSelector } from "react-redux";


export default function Comments(props) {
  let { logged, id } = useSelector((store) => store.userReducer);
  let { comment } = props;
  console.log(comment)
  console.log(comment.userId)
  return (
    <>
      {comment.userId.logged ? (
        <div className="comments100logged">
          <img src={comment.userId.photo} className="photo100logged"></img>

          <p className="parrafo101">{comment.userId.name} {comment.userId.lastName}</p>
          <p className="parrafo100">{comment.comment}</p>
          <div className="iconitos100">
            {comment.userId._id === id
            ? ( <><img
            src="https://img.icons8.com/ios-glyphs/30/CCC6C6/pencil-tip.png"
            alt=""
            srcset=""
          />
          <img
            src="https://img.icons8.com/ios-glyphs/30/CCC6C6/multiply.png"
            alt=""
            srcset=""
          /> </>): null}
          </div>
        </div>
      ) : (
        <div className="comments100">
        <img src={comment.userId.photo} className="photo100"></img>

        <p className="parrafo101">{comment.userId.name} {comment.userId.lastName}</p>
        <p className="parrafo100">{comment.comment}</p>
        <div className="iconitos100">
       
        </div>
      </div>
      )}
    </>
  );
}

import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";

let { postComments, deleteComment } = commentsActions;

const initialState = {
  refresh: false,
};

const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(postComments.fulfilled, (state, action) => {
    return { ...state, refresh: !state.refresh };
  });
  builder.addCase(deleteComment.fulfilled, (state, action) => {
    return { ...state, refresh: !state.refresh };
  });
});

export default commentsReducer;

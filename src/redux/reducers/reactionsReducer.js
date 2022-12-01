import { createReducer } from "@reduxjs/toolkit"; //Me importo para crear REDUCTORES
import reactionsActions from "../actions/reactionsActions";
const { reactions, likeDislike, getReactionsOfUser } = reactionsActions;

const initialState = {
  allReactionsOfUser: [],
};

const reactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getReactionsOfUser.fulfilled, (state, action) => {
    if (action.payload.success) {
      return { ...state, allReactionsOfUser: action.payload.reactions };
    } else {
      return { ...state };
    }
  });


});

export default reactionsReducer;

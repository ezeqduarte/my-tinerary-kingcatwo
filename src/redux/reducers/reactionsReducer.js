import { createReducer } from "@reduxjs/toolkit"; //Me importo para crear REDUCTORES
import reactionsActions from "../actions/reactionsActions";
const { reactions, likeDislike } = reactionsActions;

const initialState = {
  allReactions: [],
};

const reactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(reactions.fulfilled, (state, action) => {
    if (action.payload.success) {
      return { ...state, allReactions: action.payload.reactions };
    } else {
      return { ...state };
    }
  });

  builder.addCase(likeDislike.fulfilled, (state, action) => {
    let filter = state.allReactions.filter(
      (reaction) => reaction._id !== action.payload.reaction._id
    );

    return {
      ...state,
      allReactions: [...state.allReactions, filter],
    };
  });
});

export default reactionsReducer;

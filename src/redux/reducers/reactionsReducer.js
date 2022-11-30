import { createReducer } from "@reduxjs/toolkit"; //Me importo para crear REDUCTORES
import reactionsActions from "../actions/reactionsActions";
const { reactions, likeDislike } = reactionsActions;

const initialState = {
  allReactions: [],
  reactionsOfTinerary: [],
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
    return { ...state, allReactions: state.allReactions.filter(reaction=>reaction._id!==action.payload._id).concat(action.payload.reaction) };
  });
});

export default reactionsReducer;

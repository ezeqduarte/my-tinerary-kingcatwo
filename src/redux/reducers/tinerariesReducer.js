import { createReducer } from "@reduxjs/toolkit";
import tinerariesActions from "../actions/tinerariesActions";
const { getTinerariesUser, deleteTinerary , editTinerary } = tinerariesActions;

const initialState = {
  tinerariesUser: [],
};

const tineraryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTinerariesUser.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, tinerariesUser: action.payload.itinerariesUser };
  });

  builder.addCase(deleteTinerary.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, tinerariesUser: state.tinerariesUser.filter(tinerary=> tinerary._id !== action.payload.itineraryDeleted) };
  });

  builder.addCase(editTinerary.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, tinerariesUser: state.tinerariesUser.filter(tinerary=> tinerary._id !== action.payload.itineraryEdit._id).concat(action.payload.itineraryEdit)};
  });
  
});

export default tineraryReducer;

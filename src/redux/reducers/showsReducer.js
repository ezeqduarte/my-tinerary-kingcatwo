import { createReducer } from "@reduxjs/toolkit";
import showsActions from "../actions/showsActions";
const { getShows, deleteShows, editShows } = showsActions;

const initialState = {
  showsReducer: [],
};

const showsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getShows.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, showsReducer: action.payload.showsUser };
  });

  builder.addCase(deleteShows.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, showsReducer: state.showsReducer.filter(show => show._id != action.payload.idShowDeleted) };
  });


  builder.addCase(editShows.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, showsReducer: state.showsReducer.filter(show => show._id != action.payload.idShowEdited._id).concat(action.payload.idShowEdited) };
  });



  
});

export default showsReducer;

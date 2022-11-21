import { createReducer } from "@reduxjs/toolkit";
import hotels from "../../data/hotels";
import hotelsAction from "../actions/hotelsActions";

const initialState = {
hotelsR: [], hotelsAdmin: [],  //Esto lo haciamos antes pero ahora lo estamos haciendo en el reductor, ahora se llena cuando ejecutamos la accion getCities.
loading: false,
error: false, 
    
}

const hotelsReducer = createReducer(initialState, (builder) =>{

builder.addCase(hotelsAction.getHotels.fulfilled, (state, action) => {
 
    return { ...state, loading: false, hotelsR: action.payload.hotelsR}
})

builder.addCase(hotelsAction.getHotels.pending, (state, action) => {
   
    return { ...state, loading: true }
    
})

builder.addCase(hotelsAction.getHotels.rejected, (state, action) => {
   
    return { ...state, error: true, loading: false}
})


builder.addCase(hotelsAction. getHotelsAdmin.fulfilled, (state, action) => {
   
    return { ...state, loading: false, hotelsAdmin: action.payload.hotelsAdmin}
})

builder.addCase(hotelsAction. deleteHotelsAdmin.fulfilled, (state, action) => {

    return { ...state, loading: false, hotelsAdmin: state.hotelsAdmin.filter(hotels => hotels._id != action.payload.hotel)}
})


builder.addCase(hotelsAction. editHotelsAdmin.fulfilled, (state, action) => {

    return {
        ...state,
        hotelsOfAdmin: state.hotelsAdmin.filter(
          (hotel) => hotel._id !== action.payload.hotelsAdmin._id
        ).concat(action.payload.hotelsAdmin),
      };
})





})

export default hotelsReducer //Hotels Reducers es un solo reductor, que dentro tiene distintos casos como por ejemplo hotelsR 


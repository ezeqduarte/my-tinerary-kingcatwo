import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsActions";

const initialState = {
hotelsR: [],  //Esto lo haciamos antes pero ahora lo estamos haciendo en el reductor, ahora se llena cuando ejecutamos la accion getCities.
loading: false,
error: false, 
    
}

const hotelsReducer = createReducer(initialState, (builder) =>{

builder.addCase(hotelsAction.getHotels.fulfilled, (state, action) => {
    console.log(state)
    console.log(action)
    return { ...state, loading: false, hotelsR: action.payload.hotelsR}
})

builder.addCase(hotelsAction.getHotels.pending, (state, action) => {
    console.log(state)
    console.log(action)
    return { ...state, loading: true }
    
})

builder.addCase(hotelsAction.getHotels.rejected, (state, action) => {
    console.log(state)
    console.log(action)
    return { ...state, error: true, loading: false}
})


})

export default hotelsReducer //Hotels Reducers es un solo reductor, que dentro tiene distintos casos como por ejemplo hotelsR 


import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";
const { getCities , getContinent } = citiesActions;

const initialState = {
  cities: [],  //Esto lo haciamos antes pero ahora lo estamos haciendo en el reductor, ahora se llena cuando ejecut
  continents: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities.fulfilled, (state, action) => {
    //console.log(action);
    return {...state, cities: action.payload.cities}
  });
  builder.addCase(getContinent.fulfilled, (state, action) => {
    //console.log(action);
    return {...state, continents: action.payload.continents}
  });
});

export default citiesReducer;

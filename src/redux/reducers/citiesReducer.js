import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";
const { getCities , getContinent, getCitiesOfAdmin } = citiesActions;

const initialState = {
  cities: [],  
  continents: [],
  citiesOfAdmin: []
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
  builder.addCase(getCitiesOfAdmin.fulfilled, (state, action) => {
    //console.log(action);
    return {...state, citiesOfAdmin: action.payload.citiesOfAdmin}
  });
});

export default citiesReducer;

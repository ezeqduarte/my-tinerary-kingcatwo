import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";
const {
  getCities,
  getContinent,
  getCitiesOfAdmin,
  deleteCityAdmin,
  editCityAdmin,
} = citiesActions;

const initialState = {
  cities: [],
  continents: [],
  citiesOfAdmin: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, cities: action.payload.cities };
  });
  builder.addCase(getContinent.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, continents: action.payload.continents };
  });
  builder.addCase(getCitiesOfAdmin.fulfilled, (state, action) => {
    //console.log(action);
    return { ...state, citiesOfAdmin: action.payload.citiesOfAdmin };
  });
  builder.addCase(deleteCityAdmin.fulfilled, (state, action) => {
    /*   console.log(initialState.citiesOfAdmin); */

    return {
      ...state,
      citiesOfAdmin: state.citiesOfAdmin.filter(
        (city) => city._id !== action.payload.cityDeleted
      ),
    };
  });
  builder.addCase(editCityAdmin.fulfilled, (state, action) => {
    return {
      ...state,
      citiesOfAdmin: state.citiesOfAdmin.filter(
        (city) => city._id !== action.payload.cityModificated._id
      ).concat(action.payload.cityModificated),
    };
  });
});

export default citiesReducer;

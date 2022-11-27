import { createReducer } from "@reduxjs/toolkit"; //Me importo para crear REDUCTORES
import citiesActions from "../actions/citiesActions";
const {
  getCities,
  getContinent,
  getCitiesOfAdmin,
  deleteCityAdmin,
  editCityAdmin,
  createCity,
} = citiesActions;

const initialState = {
  cities: [],
  continents: [],
  citiesOfAdmin: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(createCity.fulfilled, (state, action) => {
    if (action.payload.success) {
      return {
        ...state,
        continents: state.continents.concat(action.payload.cityCreated),
      };
    } else {
      return { ...state };
    }
  });
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
    if (action.payload.success) {
      return {
        ...state,
        citiesOfAdmin: state.citiesOfAdmin
          .filter((city) => city._id !== action.payload.cityModificated._id)
          .concat(action.payload.cityModificated),
      };
    } else {
      return {...state}
    }
    
  });
});

export default citiesReducer;

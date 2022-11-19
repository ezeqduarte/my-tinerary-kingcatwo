import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getCities = createAsyncThunk("getCities", async (data) => {
  try {
    const { peticion } = data;
    //console.log(peticion);
    const res = await axios.get(`${API}/cities/${peticion}`);
    //console.log(res);
    return {
      cities: res.data.cities,
    };
  } catch (error) {
    console.log(error.message);
    return {
        cities: [],
      };
  }
});

const getContinent = createAsyncThunk("getContinent", async () => {
  try {
    const res = await axios.get(`${API}/cities/`);
    const continents = [
      ...new Set([...res.data.cities].map((city) => city.continent)),
    ];

    /* console.log(continents); */

    return {
      continents: continents,
    };
  } catch (error) {
    console.log(error.message);
    return {
        continents: [],
      };
  }
});

const citiesActions = {
  getCities,
  getContinent,
};

export default citiesActions;

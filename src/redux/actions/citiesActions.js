import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getCities = createAsyncThunk("getCities", async ({ peticion }) => {
  try {
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

const getCitiesOfAdmin = createAsyncThunk("getCitiesOfAdmin", async (data) => {
  try {
    const { id } = data;
    //console.log(peticion);
    const res = await axios.get(`${API}/cities/?userId=${id}`);
    /* console.log(res); */
    return {
      citiesOfAdmin: res.data.cities,
    };
  } catch (error) {
    console.log(error.message);
    return {
      citiesAdmin: [],
    };
  }
});

const deleteCityAdmin = createAsyncThunk("deleteCityAdmin", async (data) => {
  try {
    const { id } = data;
    //console.log(peticion);
    const res = await axios.delete(`${API}/cities/${id}`);
    console.log(res);
    return {
      cityDeleted: res.data.cityDeleted,
      succes: true,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const editCityAdmin = createAsyncThunk("editCityAdmin", async (data) => {
  try {
    const { id } = data;
    const object = {
      name: data.name,
      continent: data.continent,
      photo: data.photo,
      population: data.population,
      userId: `636d1e66dbb2d08117b1c7c2`,
    };

    console.log(id);
    console.log(data);

    //console.log(peticion);
    const res = await axios.put(`${API}cities/${id}`, object, { new: true });
    /* console.log(res); */
    if (res) {
      return {
        cityModificated: res.data.cityModificated,
        succes: true,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
});

const citiesActions = {
  getCities,
  getContinent,
  getCitiesOfAdmin,
  deleteCityAdmin,
  editCityAdmin,
};

export default citiesActions;

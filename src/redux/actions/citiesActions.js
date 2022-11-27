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

    /* console.log(continents); */

    return {
      continents: res.data.cities,
    };
  } catch (error) {
    console.log(error.message);
    return {
      continents: [],
    };
  }
});

const getCitiesOfAdmin = createAsyncThunk("getCitiesOfAdmin", async (id) => {
  try {
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

const deleteCityAdmin = createAsyncThunk("deleteCityAdmin", async (id) => {
  try {
   
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
 
  const { id } = data;
    const object = {
      name: data.name,
      continent: data.continent,
      photo: data.photo,
      population: data.population,
      userId: data.userId,
    };
 
  try {
    

    console.log(id);
    console.log(data);

    //console.log(peticion);
    const res = await axios.put(`${API}cities/${id}`, object, { new: true });
    console.log(res);
    if (res.data.success) {
      return {
        cityModificated: res.data.cityModificated,
        success: true,
      };
    } 
    else {
      return {
        message: res.data.message,
        success: false,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
});

const createCity = createAsyncThunk("createCity", async (data) => {
  try {
    const res = await axios.post(`${API}cities/`, data);

    if (res.data.success) {
      return {
        cityCreated: res.data.id,
        success: true,
      };
    } else {
      return {
        success: false,
        message: res.data.message,
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
  createCity,
};

export default citiesActions;

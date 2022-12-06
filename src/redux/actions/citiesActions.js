import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

/* let token = JSON.parse(localStorage.getItem("token"));

if (token) {
  dispatch(reIngress(token.token.user));
} */

const getCities = createAsyncThunk("getCities", async ({ peticion }) => {
  try {
    
    const res = await axios.get(`${API}/cities/${peticion}`);
    
    return {
      cities: res.data.cities,
    };
  } catch (error) {
   console.log("");
    return {
      cities: [],
    };
  }
});

const getContinent = createAsyncThunk("getContinent", async () => {
  try {
    const res = await axios.get(`${API}/cities/`);

   

    return {
      continents: res.data.cities,
    };
  } catch (error) {
   console.log("");
    return {
      continents: [],
    };
  }
});

const getCitiesOfAdmin = createAsyncThunk("getCitiesOfAdmin", async (id) => {
  try {
   
    const res = await axios.get(`${API}/cities/?userId=${id}`);
    
    return {
      citiesOfAdmin: res.data.cities,
    };
  } catch (error) {
   console.log("");
    return {
      citiesAdmin: [],
    };
  }
});

const deleteCityAdmin = createAsyncThunk("deleteCityAdmin", async (data) => {

  let { token, id } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    
    const res = await axios.delete(`${API}cities/${id}`, headers);
    
    return {
      cityDeleted: res.data.cityDeleted,
      succes: true,
    };
  } catch (error) {
   console.log("");
  }
});

const editCityAdmin = createAsyncThunk("editCityAdmin", async (data) => {
  const { id, token } = data;
  const object = {
    name: data.name,
    continent: data.continent,
    photo: data.photo,
    population: data.population,
    userId: data.userId,
  };

  let headers = { headers: { Authorization: `Bearer ${token}` } };
 

  try {
   
    const res = await axios.put(`${API}cities/${id}`, object, headers);
    
    if (res.data.success) {
      return {
        cityModificated: res.data.cityModificated,
        success: true,
      };
    } else {
      return {
        message: res.data.message,
        success: false,
      };
    }
  } catch (error) {
   console.log("");
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
   console.log("");
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

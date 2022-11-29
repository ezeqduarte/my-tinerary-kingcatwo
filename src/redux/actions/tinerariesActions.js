import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getTinerariesUser = createAsyncThunk("getTinerariesUser", async (user) => {
  try {
    
    //console.log(peticion);
    const res = await axios.get(`${API}/itineraries/?userId=${user}`);
    //console.log(res);
    return {
      itinerariesUser: res.data.searched,
    };
  } catch (error) {
    console.log(error.message);
    return {
      cities: [],
    };
  }
});

const deleteTinerary = createAsyncThunk("deleteTinerary", async (data) => {
  const { id , token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    //console.log(peticion);
    const res = await axios.delete(`${API}/itineraries/${id}`, headers);
    //console.log(res);
    return {
      itineraryDeleted: res.data.idDeleted,
    };
  } catch (error) {
    console.log(error.message);
    return {
      cities: [],
    };
  }
});

const editTinerary = createAsyncThunk("editTinerary", async (data) => {
  const { id, info , token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    //console.log(peticion);
    const res = await axios.put(`${API}/itineraries/${id}`, info, headers);
    //console.log(res);
    return {
      itineraryEdit: res.data.itineraryModificated,
    };
  } catch (error) {
    console.log(error.message);
    return {
      cities: [],
    };
  }
});

const newTinerary = createAsyncThunk("newTinerary", async (data) => {
  try {
    //console.log(peticion);
    const res = await axios.post(`${API}/itineraries/`, data);
    //console.log(res);

    if (res.data.success) {
      return {
        success:true,
        message: res.data.message,
        newTinerary: res.data.id,
      };
    } else {
      return {
        success:false,
        message: res.data.message,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
});

const tinerariesActions = {
  getTinerariesUser,
  deleteTinerary,
  editTinerary,
  newTinerary,
};

export default tinerariesActions;

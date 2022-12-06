import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getTinerariesUser = createAsyncThunk("getTinerariesUser", async (user) => {
  try {
    
   
    const res = await axios.get(`${API}/itineraries/?userId=${user}`);
   
    return {
      itinerariesUser: res.data.searched,
    };
  } catch (error) {
   console.log("");
    return {
      cities: [],
    };
  }
});

const deleteTinerary = createAsyncThunk("deleteTinerary", async (data) => {
  const { id , token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
   
    const res = await axios.delete(`${API}/itineraries/${id}`, headers);
   
    return {
      itineraryDeleted: res.data.idDeleted,
    };
  } catch (error) {
   console.log("");
    return {
      cities: [],
    };
  }
});

const editTinerary = createAsyncThunk("editTinerary", async (data) => {
  const { id, info , token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
   
    const res = await axios.put(`${API}/itineraries/${id}`, info, headers);
    
    return {
      itineraryEdit: res.data.itineraryModificated,
    };
  } catch (error) {
   console.log("");
    return {
      cities: [],
    };
  }
});

const newTinerary = createAsyncThunk("newTinerary", async (data) => {
  try {
   
    const res = await axios.post(`${API}/itineraries/`, data);
   

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
   console.log("");
  }
});

const tinerariesActions = {
  getTinerariesUser,
  deleteTinerary,
  editTinerary,
  newTinerary,
};

export default tinerariesActions;

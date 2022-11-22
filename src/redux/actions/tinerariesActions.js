import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getTinerariesUser = createAsyncThunk("getTinerariesUser", async () => {
  try {
    const user = "636d231d496430c95104ed88";
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

  const { id } = data;

  try {
    //console.log(peticion);
    const res = await axios.delete(`${API}/itineraries/${id}`);
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


  const { id , info } = data;

  try {
    //console.log(peticion);
    const res = await axios.put(`${API}/itineraries/${id}`, info ,   { new: true } );
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

const tinerariesActions = {
  getTinerariesUser,
  deleteTinerary,
  editTinerary,
};

export default tinerariesActions;

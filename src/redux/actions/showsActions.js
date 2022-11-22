import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getShows = createAsyncThunk("getShows", async () => {
  try {
    const user = "636d1e66dbb2d08117b1c7c2";
    //console.log(peticion);
    const res = await axios.get(`${API}/shows/?userId=${user}`);
    //console.log(res);
    return {
      showsUser: res.data.searched,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const deleteShows = createAsyncThunk("deleteShows", async (data) => {
  const { id } = data;
  try {
    //console.log(peticion);
    const res = await axios.delete(`${API}/shows/${id}`);
    //console.log(res);
    return {
      idShowDeleted: res.data.idDeleted,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const editShows = createAsyncThunk("editShows", async (data) => {
  const { id, info } = data;
  try {
    //console.log(peticion);
    const res = await axios.patch(
      `${API}/shows/${id}`,
       info ,
      { new: true }
    );
    //console.log(res);
    return {
      idShowEdited: res.data.id,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const showsActions = {
  getShows,
  deleteShows,
  editShows,
};

export default showsActions;

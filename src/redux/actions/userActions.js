import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const ingress = createAsyncThunk("ingress", async (datos) => {
  try {
    const res = await axios.post(`${API}/auth/sign-in`, datos);
    console.log(res);
    return {
      success: true,
      response: res.data,
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
    };
  }
});

const reIngress = createAsyncThunk("reIngress", async (token) => {
  let url = `${API}auth/token`;
  let headers = { headers: { "Authorization": `Bearer ${token}` } };
  try {
    let user = await axios.post(url, null, headers);
    console.log(user.data.response.user);
    return {
      success: true,
      response: {
        user: user.data.response.user,
        token,
      },
    };
  } catch (error) {
    console.log(error.response);
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

const logout = createAsyncThunk("logout", async (token) => {

  let url = `${API}auth/sign-out`;
  let headers = { headers: { "Authorization": `Bearer ${token}` } };
  
  try {
    let user = await axios.post(url, null, headers);
    console.log(user.data);
    return {
      success: true,
     response: user.data.message
    };
  } catch (error) {
    /* console.log(error.response); */
    return {
      success: false,
      response: error.response.data.message,
    };
  }

});

const userActions = {
  ingress,
  reIngress,
  logout,
};

export default userActions;

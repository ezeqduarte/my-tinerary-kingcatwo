import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const ingress = createAsyncThunk("ingress", async (datos) => {
  try {
    const res = await axios.post(`${API}/auth/sign-in`, datos);
console.log(res)
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

const userActions = {
  ingress,
};

export default userActions;

import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";
const { ingress, reIngress, logout } = userActions;

const initialState = {
  name: "",
  photo: "",
  logged: false,
  role: "",
  id: "",
  token: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ingress.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    console.log(action.payload);
    if (success) {
      let { user, token } = response.response;
      localStorage.setItem("token", JSON.stringify({ token: { user: token } }));
      let newState = {
        ...state,
        name: user.name,
        photo: user.photo,
        logged: true,
        id: user.id,
        token: token,
        role: user.role,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
  builder.addCase(reIngress.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    console.log(action.payload);
    if (success) {
      let { user, token } = response;

      let newState = {
        ...state,
        name: user.name,
        photo: user.photo,
        id: user.id,
        logged: true,
        token: token,
        role: user.role,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
  builder.addCase(logout.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    if (success) {
      localStorage.removeItem("token");
      let newState = {
        ...state,
        name: "",
        photo: "",
        id: "",
        logged: false,
        token: "",
        role: "",
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
});

export default userReducer;

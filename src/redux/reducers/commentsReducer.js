import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/tinerariesActions";

let {} = commentsActions;

const initialState = {};

const commentsReducer = createReducer(initialState, (builder) => {});

export default commentsReducer;

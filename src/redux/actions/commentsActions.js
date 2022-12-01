import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getComments = createAsyncThunk("getComments", async (itineraryId) => {
  console.log(itineraryId);
  try {
    const res = await axios.get(`${API}/comments/?itineraryId=${itineraryId}`);

    return {
      commentsItineraries: res.data.comments,
    };
  } catch (error) {
    return {
      cities: [],
    };
  }
});

const postComments = createAsyncThunk(
  "postComments",
  async ({ token, newCommentObject }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.post(
        `${API}/comments/`,
        newCommentObject,
        headers
      );

      return {
        commentPost: res.data.id,
      };
    } catch (error) {
      console.log(error.message);
      return {
        cities: [],
      };
    }
  }
);

const commentsActions = {
  getComments,
  postComments,
};

export default commentsActions;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getComments = createAsyncThunk("getComments", async (itineraryId) => {
 
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
    let headers = { headers: { Authorization: `Bearer ${token}`} };
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

const deleteComment = createAsyncThunk("deleteComment", async (data) => {
  const { token, id } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.delete(`${API}comments/${id}`, headers);

    return {
      success: true,
      reaction: respuesta.data.reaction,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const commentsActions = {
  getComments,
  postComments,
  deleteComment,
};

export default commentsActions;
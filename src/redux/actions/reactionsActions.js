import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const reactions = createAsyncThunk("reactionOfTinerary", async (data) => {
  const { token, id } = data;
  // console.log(token);
  /* console.log(id); */
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.get(
      `${API}reactions/?itineraryId=${id}`,

      headers
    );

    return {
      success: true,
      reactions: respuesta.data.reactions,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const likeDislike = createAsyncThunk("likeDislike", async (data) => {
  const { token, id, name } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.put(
      `${API}reactions/?ItineraryId=${id}&name=${name}`,
      null,
      headers
    );

    return {
      success: true,
      reaction: respuesta.data.reaction,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const getReactionsOfUser = createAsyncThunk("getReactionsOfUser", async (data) => {
  const { token, id } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.get(
      `${API}reactions/?userId=${id}`,
      headers
    );

    return {
      success: true,
      reactions: respuesta.data.reactions,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const deleteReaction = createAsyncThunk("deleteReaction", async (data) => {

  const { token, id } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.put(
      `${API}reactions/${id}`,
      null,
      headers
    );

    return {
      success: true,
      reaction: respuesta.data.reaction,
    };
  } catch (error) {
    console.log(error.message);
  }
});



const reactionsActions = {
  reactions,
  likeDislike,
  getReactionsOfUser,
  deleteReaction,
};

export default reactionsActions;

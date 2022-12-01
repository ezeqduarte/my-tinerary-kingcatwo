import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const reactions = createAsyncThunk("reactionOfTinerary", async (id) => {
  try {
    const respuesta = await axios.get(`${API}reactions/?itineraryId=${id}`);

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

  console.log(token);
  console.log(id);
  console.log(name);

  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.patch(
      `${API}reactions/?ItineraryId=${id}&name=${name}`,
      null,
      headers
    );
      console.log(respuesta.data.reaction);
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
};

export default reactionsActions;

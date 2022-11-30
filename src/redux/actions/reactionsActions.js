import { createAsyncThunk } from "@reduxjs/toolkit"; //Me importo createAsyncThunk ya que
// voy a utuilizar una accion que tiene que ser asincrona porque hago una peticion a la api
import axios from "axios";
import API from "../../api";

const reactions = createAsyncThunk("reactionOfTinerary", async () => {
  try {
    const respuesta = await axios.get(`${API}reactions/`);

    return {
      success: true,
      reactions: respuesta.data.reactions,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const likeDislike = createAsyncThunk("likeDislike", async (data) => {

  const {token, id, name} = data
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const respuesta = await axios.put(`${API}reactions/?ItineraryId=${id}&name=${name}`, null, headers);

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

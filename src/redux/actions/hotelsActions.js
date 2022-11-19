import { createAsyncThunk } from "@reduxjs/toolkit"; //Me importo createAsyncThunk ya que
// voy a utuilizar una accion que tiene que ser asincrona porque hago una peticion a la api
import axios from "axios";
import API from "../../api";

const getHotels = createAsyncThunk("getHotels", async (data) => { //En el caso de las acciones lo que llega aca (data) siempre tiene que ser un objetom, no se le puede pasar 2 parametros, tiene que ser uno solo y tiene que ser un objeto, si se quieren pasar 2 PARAMETROS O MÁS TIENEN QUE SER DENTRODE UN OBJETOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  try {
   const inputText = data.inputText
   const option = data.option
    const respuesta = await axios.get(`${API}hotels/?name=${inputText}&order=${option}`); 
   
    return { hotelsR: respuesta.data.Hotels };
  } catch (error) {
    console.log(error.message + " ---------------> Está sucediendo otra vez");
  }
});

const hotelsAction = {
  getHotels,
};

export default hotelsAction;
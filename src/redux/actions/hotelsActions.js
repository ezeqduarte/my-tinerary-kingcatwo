import { createAsyncThunk } from "@reduxjs/toolkit"; //Me importo createAsyncThunk ya que
// voy a utuilizar una accion que tiene que ser asincrona porque hago una peticion a la api
import axios from "axios";
import API from "../../api";

const getHotels = createAsyncThunk("getHotels", async (data) => {
  //En el caso de las acciones lo que llega aca (data) siempre tiene que ser un objetom, no se le puede pasar 2 parametros, tiene que ser uno solo y tiene que ser un objeto, si se quieren pasar 2 PARAMETROS O MÁS TIENEN QUE SER DENTRODE UN OBJETOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  try {
    const inputText = data.inputText; // x2 a lo de abajo
    const option = data.option; // necesito que me filtre por lo que se manda de lfront
    const respuesta = await axios.get(
      `${API}hotels/?name=${inputText}&order=${option}`   //respuesta a la peticion
    );

    return { hotelsR: respuesta.data.Hotels };    //Esta es la payload de la accion, es decir lo que contiene la informacion de la accion que se la pasa al reductor.
  } catch (error) {
    console.log("");
  }
});

const getHotelsAdmin = createAsyncThunk("getHotelsAdmin", async (id) => { //Esto lo hago para obtener TODOS LOS HOTELES DE LOS ADMIN, pero con REDUX.
  //En el caso de las acciones lo que llega aca (data) siempre tiene que ser un objetom, no se le puede pasar 2 parametros, tiene que ser uno solo y tiene que ser un objeto, si se quieren pasar 2 PARAMETROS O MÁS TIENEN QUE SER DENTRODE UN OBJETOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  try {
    const respuesta = await axios.get(
      `${API}hotels/?userId=${id}` //aca no le paso data porque ya hardcodeo userid
    );

    return { hotelsAdmin: respuesta.data.Hotels }; // si todo va bien le pido que me rettorne un objeto (PAYLOAD) hotels admin, que tiene dentro respuesta.data.hotels
  } catch (error) {
    console.log("");
  }
});

const editHotelsAdmin = createAsyncThunk("editHotelsAdmin", async (data) => {  //Esto lo hago para poder editar hoteles como admin.


let headers = { headers: { Authorization: `Bearer ${data.token}` } };

  try {
    const respuesta = await axios.patch(
      `${API}hotels/${data.id}`,
      data.objeto,
      headers //Por lo que entendi el new true lo que hace es cuando la api responde, te va a respoder con el objeto nuevo y en el caso de false es con el objeto anterior.
    );

    return { hotelsAdmin: respuesta.data.hotelito};
  } catch (error) {
    console.log("");
  }
});

const deleteHotelsAdmin = createAsyncThunk( //Esto lo hago para poder  eliminar hoteles.
  "deleteHotelsAdmin",
  async (data) => {
   
    //En el caso de las acciones lo que llega aca (data) siempre tiene que ser un objetom, no se le puede pasar 2 parametros, tiene que ser uno solo y tiene que ser un objeto, si se quieren pasar 2 PARAMETROS O MÁS TIENEN QUE SER DENTRODE UN OBJETOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    let headers = { headers: { Authorization: `Bearer ${data.token}` } };
    try {
      const respuesta = await axios.delete(`${API}hotels/${data.id}`,headers );

      return { hotel: respuesta.data.hotel };
    } catch (error) {
      console.log("");
    }
  }
);

const getAllHotels = createAsyncThunk( //Esto lo hago para poder  eliminar hoteles.
  "getAllHotels",
  async () => {   
   
    try {
      const respuesta = await axios.get(`${API}hotels/`);

      return { hotels: respuesta.data.Hotels };
    } catch (error) {
      console.log("");
    }
  }
);












const hotelsAction = {  //Aca basicamente estoy guardando todas las acciones que hice dentro de un objeto contenedor llamado Hotels action, entonces despues al reductor solo le paso este objeto.
  editHotelsAdmin ,
  getHotels,
  deleteHotelsAdmin,
  getAllHotels,
  getHotelsAdmin, //Contenedor de acciones de hotels
};

export default hotelsAction;

//Aca finalmente me exporto el objeteano para tenerlo disponible en donde guste utilizarlo....
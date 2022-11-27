import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api";

const getShows = createAsyncThunk("getShows", async (user) => {
  //Me agarro todos los SHOWS como USUARIO por eso no le paso DATA como parametro porque necesito TODOS.
  try {
    const res = await axios.get(`${API}/shows/?userId=${user}`); //Respuesta de la API
    //console.log(res);
    return {
      //Todo lo que esta dentro del return es la payload un objeto con la inforamcion necesaria para el reductor. (como es async no hace falta pponerle payload)
      showsUser: res.data.searched, // Me voy a guardar en showUser la respuesta de la data.searched(miarraydeshows), eso se ve con postman
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const createShows = createAsyncThunk("createShows", async (data) => {
  //Aca estoy haciendo una funcion para borrar shows por data le paso el ID del show especifico

  try {
    //console.log(peticion);
    const res = await axios.post(`${API}shows/`,data ); //Aca recibo la respuesta de la api, la cual me va a ARROJAR el id del show que queremos borrar.
    //console.log(res);
    if (res.data.success){return {
      success: true,
      idShowCreated: res.data.id, //Aca le pedimos que en base al id de arriba me responda con el ID del show borrado es decir me va a a
    };}
    else{return {success:false, error:res.data.message}}
    
  } catch (error) {
    console.log(error.message);
    return {
      error: error.message, //Se hay un error me va a devolver el estado inicial de mis SHOWS. Una buena practica de codigo? si, segun mi mentor favorito
    };
  }
});

const deleteShows = createAsyncThunk("deleteShows", async (data) => {
  //Aca estoy haciendo una funcion para borrar shows por data le paso el ID del show especifico
  const { id } = data; //Aca estoy desestructurando el objeto data para obtener data.id.
  try {
    //console.log(peticion);
    const res = await axios.delete(`${API}/shows/${id}`); //Aca recibo la respuesta de la api, la cual me va a ARROJAR el id del show que queremos borrar.
    //console.log(res);
    return {
      idShowDeleted: res.data.idDeleted, //Aca le pedimos que en base al id de arriba me responda con el ID del show borrado es decir me va a a
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [], //Se hay un error me va a devolver el estado inicial de mis SHOWS. Una buena practica de codigo? si, segun mi mentor favorito
    };
  }
});

const editShows = createAsyncThunk("editShows", async (data) => {
  //Aca me estoy creando una constante que va a ser igual a una accion que va a servir para editar los shows, nuevamente como la peticion es a la api es una accion ASYNCRONA, en las acciones asincronas no necesito llamar a la payload porque ya lo entiende como payload.
  const { id, info } = data; //Aca estoy desestructurando data para que me devuelva id e info (mi formulario)
  try {
    //console.log(peticion);
    const res = await axios.patch(
      //Aca le hago una peticion a la api para patchear los shows
      `${API}/shows/${id}`,
      info,
      { new: true } //New true es para que me devuelva el nuevo objeto, esta noche quiero brandy
    );
    //console.log(res);
    return {
      idShowEdited: res.data.id, //ACA ESTA MI PAYLOAD con la respuesta correspondiente.
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [], //Caso que no funcione lo de arriba me devuelve shows en su estado inicial.
    };
  }
});

const showsActions = {
  //Aca me creo un objeto con todas mis acciones para que despues pueda utilizarlas solo llamando a este objeto.
  getShows,
  deleteShows,
  editShows,
  createShows,
};

export default showsActions; //exporto mi objeto

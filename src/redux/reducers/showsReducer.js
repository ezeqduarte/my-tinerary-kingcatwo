import { createReducer } from "@reduxjs/toolkit"; //Me traigo create reducers para poder crear un reductor
import showsActions from "../actions/showsActions"; //Me traigo las actions de shows
const { getShows, deleteShows, editShows, createShows } = showsActions; // Me traigo las showactions que necesito

const initialState = {
  showsReducer: [], //Le digo que me estado inicial va a ser igual a showreducer, el cual arranca vacio y despues la va llenando.
};

const showsReducer = createReducer(initialState, (builder) => {
  //Aca me creo el reductor de Showsm donde colocare todos los casos con la accion correspondiente.
  builder.addCase(getShows.fulfilled, (state, action) => {
    //Aca le digo que en este caso cuando getShows este fullfiled
    //console.log(action);
    return { ...state, showsReducer: action.payload.showsUser }; //Me mantenga todo lo que tiene el estaod inicial y me modifique algo puntual
  });

  builder.addCase(deleteShows.fulfilled, (state, action) => {
    //console.log(action);
    return {
      ...state,
      showsReducer: state.showsReducer.filter(
        (show) => show._id != action.payload.idShowDeleted
      ),
    }; //Filter paraa solo borrar el show que se quiera
  });

  builder.addCase(editShows.fulfilled, (state, action) => {
    //console.log(action);
    return {
      ...state,
      showsReducer: state.showsReducer
        .filter((show) => show._id != action.payload.idShowEdited._id)
        .concat(action.payload.idShowEdited),
    }; //Filter paraa solomodificar el show que se quiera.
  });

  builder.addCase(createShows.fulfilled, (state, action) => {
    //console.log(action);
    if (action.payload.success) {
      return {
        ...state,
        showsReducer: state.showsReducer.concat(action.payload.idShowCreated),
      };
    } else {
      return { ...state, showsReducer: state.showsReducer };
    }
  });
});

export default showsReducer; //Exporto los reductores

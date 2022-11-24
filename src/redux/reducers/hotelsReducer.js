import { createReducer } from "@reduxjs/toolkit"; //Me importo para crear REDUCTORES
import hotels from "../../data/hotels";
import hotelsAction from "../actions/hotelsActions"; //Me importo mis acciones de HOTELS para poder pasarlas a los REDUCTORES.

const initialState = {
  hotelsR: [],
  hotelsAdmin: [], //Esto lo haciamos antes pero ahora lo estamos haciendo en el reductor, ahora se llena cuando ejecutamos la accion getCities.
  loading: false, //El estado inicial es falso
  error: false, //y el error tambien
};

const hotelsReducer = createReducer(initialState, (builder) => {
  //Me creo el reductor para HOTELS el cual tendra diferentes CASOS con diferentes ACCIONES

  builder.addCase(hotelsAction.getHotels.fulfilled, (state, action) => {
    //Builder es el constructor del reductor, le agrego un caso  que en este caso me va a traer todos los hotels , fullfilled hace referencia a que se cargaron y que la peticion fue un exito.

    return { ...state, loading: false, hotelsR: action.payload.hotelsR }; //Aca me va a devovler el nuevo estado., action.payload es lo que le llega al reductor desde la accion
  });

  builder.addCase(hotelsAction.getHotels.pending, (state, action) => {
    return { ...state, loading: true }; //Aca agregue un case donde todavia sigue cargando la peticion que hice en mi accion getHotels.
  });

  builder.addCase(hotelsAction.getHotels.rejected, (state, action) => {
    return { ...state, error: true, loading: false }; //Aca agregue un case donde la peticion que hice ne gethotels no salio bien.
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  builder.addCase(hotelsAction.getHotelsAdmin.fulfilled, (state, action) => {
    //Aca estoy creando un nuevo case paracuando se ejecute la accion de getHotelsADMIN

    return {
      ...state,
      loading: false,
      hotelsAdmin: action.payload.hotelsAdmin,
    }; //Aca retorna el nuevo estado.
  });

  builder.addCase(hotelsAction.deleteHotelsAdmin.fulfilled, (state, action) => {
    //Aca me creo un nuevo caso para cuando se ejecute la accion deleteHotelsAdmin

    return {
      ...state,
      loading: false,
      hotelsAdmin: state.hotelsAdmin.filter(
        (hotels) => hotels._id != action.payload.hotel
      ),
    }; //Me devuelve un nuevo estado, hago un filter para poder borrar SOLO el hotel que quiero.
  });

  builder.addCase(hotelsAction.editHotelsAdmin.fulfilled, (state, action) => {
    //Aca me creo un nuevo caso para cuando se ejecute la accion editHotels

    return {
      ...state,
      hotelsOfAdmin: state.hotelsAdmin
        .filter(
          (hotel) => hotel._id !== action.payload.hotelsAdmin._id //Me devuelve un nuevo estado, hago un filter para poder borrar SOLO el hotel viejo y dejarlo editado con las nuevas propiedades que quiera.
        )
        .concat(action.payload.hotelsAdmin),
    };
  });
});

export default hotelsReducer; //Hotels Reducers es un solo reductor, que dentro tiene distintos casos como por ejemplo hotelsR

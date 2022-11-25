import citiesReducer from "./citiesReducer"; 
import hotelsReducer from "./hotelsReducer"; //Aca me estoy importando los reductores  a mi rootreducer.
import tineraryReducer from "./tinerariesReducer";
import showsReducer from "./showsReducer";
import userReducer from "./userReducer";

//Aca es donde juntamos todos los reductores, se hace por más prolijidad.

const rootReducer = { //En root reducer tengo un objeto con todos mis reductores.
  hotelsReducer,
  citiesReducer,
  tineraryReducer,
  showsReducer,
  userReducer,
};

export default rootReducer;

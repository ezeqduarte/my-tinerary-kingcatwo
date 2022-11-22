import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";
import tineraryReducer from "./tinerariesReducer";
import showsReducer from "./showsReducer";

//Aca es donde juntamos todos los reductores, se hace por más prolijidad.

const rootReducer = {
  hotelsReducer,
  citiesReducer,
  tineraryReducer,
  showsReducer,
};

export default rootReducer;

import citiesReducer from "./citiesReducer"
import hotelsReducer from "./hotelsReducer"
import showsReducer from "./showsReducer"
//Aca es donde juntamos todos los reductores, se hace por más prolijidad.

const rootReducer = {
    hotelsReducer,
    citiesReducer,
    showsReducer ,
   
}

export default rootReducer
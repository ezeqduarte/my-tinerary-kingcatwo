import citiesReducer from "./citiesReducer"
import hotelsReducer from "./hotelsReducer"
//Aca es donde juntamos todos los reductores, se hace por más prolijidad.

const rootReducer = {
    hotelsReducer,
    citiesReducer,
   
}

export default rootReducer
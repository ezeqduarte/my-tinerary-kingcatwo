import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer  //Aqui estoy configurando mi STORE la cual SOLO puede ser modificada mediante REDUCTORESS y a essa STORE le paso mi OBJETO ROOT REDUCER el cual contiene TODOS mis reductores para que asi la SSTORE TENGA TODA LA INFORMACION QUE NECESITE.
})
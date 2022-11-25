import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>
);


//Aca estoy encerando todo mi document con el PROVIDER que basicamente  va a contener la store y toda su info para que toda mi aplicacion pueda verse modificada por la misma en caso de que ssea necesario.
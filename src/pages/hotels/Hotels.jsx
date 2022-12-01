import React, { useRef, useState, useEffect } from "react"; //importo todo lo necesario
import CardHotels from "../../components/CardHotels"; //importo mis cards
import GoTo from "../../components/GoTo";
import Label from "../../components/Label";
import places from "../../data/cities";
import "./hotels.css";
import "../cities/cities.css";
import hotels from "../../data/hotels"; //importo la info de hotels
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import hotelsAction from "../../redux/actions/hotelsActions";

export default function Hotels() {
  const dispatch = useDispatch();
  let [inputText, setInputText] = useState(""); //Utilizo el hook useState para determinar que el inputText va ser un elemento inicial, va a tener un modificador y un estado inicial.
  // let [hotels, sethotels] = useState([]);

  let [data, setData] = useState({inputText:"", option: ""}); //Data es el parametro que pasamos a las acciones, si una accion tiene que tener 2 parametros los mismos van dentro de un objeto 
  let [option, setOption] = useState("");
  const hotels = useSelector((store) => store.hotelsReducer.hotelsR); // Aca me suscribo al estado de los HOTELES que están en mi Reducer/hotelsReducer
/* console.log(hotels) */

  let renderInput = (e) => {
    setInputText(e.target.value);
    setData({ ...data, inputText: e.target.value });
    /* console.log(e.target.value); */
  };

  async function mayor(evento) {
    // if (evento.target.value === "mayor") {
    //   setOption("desc");
    // } else if (evento.target.value === "menor") {
    //   setOption("asc");
    // } else {
    //   setOption("");
    // }
    setOption(evento.target.value)
setData({...data, option: evento.target.value})  }
  /* console.log(data); */
  const form = useRef();

  useEffect(() => {
    // axios
    //   .get(
    //     `http://localhost:8000/api/hotels/?name=${inputText}&order=${option}`
    //   ) // Importante poner HTTP o tira ERROR. CUIDADO....
    //   .then((response) => sethotels(response.data.Hotels));
    dispatch(hotelsAction.getHotels(data)); //DESPACHO LA ACCION QUE TENGO EN HOTELSACTION (MI CONTENEDORR DE ACCIONES DE HOTELS) Y CONCRETAMENTE LLAMO A GETHOTELS
  }, [data]);

  return (
    <>
      <div className="headerHotels">
        <h2>
          Meet our most popular hotels<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#cities"></GoTo>
      </div>

      <div className="bodyCities" id="cities">
        <h2>
          Hotels<span className="rojo">.</span>
        </h2>
        <div className="citiesPhrase">
          <p>The most populars hotels, visited by our travelers...</p>
        </div>

        <form className="inputs" ref={form}>
          <fieldset>
            <label>
              Search for name of hotel
              <input
                type="text"
                className="searchForText"
                onChange={renderInput}
                value={inputText}
              />
            </label>
          </fieldset>
          <fieldset className="checkboxs">
            {/* {continents.map((continent) => (
              <Label continent={continent} key={continent}></Label>
            ))} */}
            <select onChange={mayor}>
              <option value="">Hotel Capacity</option>
              <option value="desc">High Capacity</option>
              <option value="asc">Low Capacity</option>
            </select>
          </fieldset>
        </form>
        <div className="mainCities">
          {hotels.length === 0 ? ( // ? es lo mismo que IF
            <h2 className="noMatch">
              No hotels were found that match your search
              <span className="rojo">.</span>
            </h2>
          ) : (
            // : es lo mismo que ELSE
            hotels.map((place) => <CardHotels hotel={place} key={place._id} />)
          )}
        </div>
      </div>
    </>
  );
}

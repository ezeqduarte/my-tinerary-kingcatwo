import React, { useEffect } from "react";
import "../MyShows/MyShows.css";
import GoTo from "../../components/GoTo";
import FormEditShows from "../../components/FormEditShows";
import { useDispatch, useSelector } from "react-redux";
import showsActions from "../../redux/actions/showsActions";
import CardMyShow from "../../components/CardMyShow";
import CreateShow from "../../components/CreateShow";
import hotelsAction from "../../redux/actions/hotelsActions";

export default function MyShows() {
  const dispatch = useDispatch(); //Despacho la accion, si no la despacho nunca mando la accion.
  const showcitos = useSelector((store) => store.showsReducer.showsReducer);
  const { id } = useSelector((store) => store.userReducer);
  //El UseSelector me suscribe una constante a un estado de los reductores, cada vez que se actualice showReducer(mi array con shows) se me actualiza showcitos que tambiern va a ser un array con shows
  const { getShows } = showsActions;
  const { getAllHotels } = hotelsAction;
  useEffect(() => { //
    dispatch(getShows(id)); //Despacho la accoin getshows, lo pongo dentro de un useEffect para hacer la peticion una sola vez cuand ose ingrese a la pagina
  }, []);
  useEffect(() => { //
    dispatch(getAllHotels()); //Despacho la accoin getshows, lo pongo dentro de un useEffect para hacer la peticion una sola vez cuand ose ingrese a la pagina
  }, []);


  return (
    <>
      <div className="headerMyShows">
        <h2>
          Look at the Shows you created<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#MyShows"></GoTo>
      </div>
      <div className="formMyShows">
        <h2>
          Choose an option<span className="rojo">.</span>
        </h2>
        <CreateShow></CreateShow>
            <FormEditShows></FormEditShows>
     
        
      </div>
      <div className="bodyShows" id="MyShows">
        <h2>
          Your Shows<span className="rojo">.</span>
        </h2>
        
        <div className="YourShowsDiv">
          {showcitos.map((shows) => (
            <CardMyShow city={shows} key={shows._id} />
          ))}
        </div>
      </div>
    </>
  );
}

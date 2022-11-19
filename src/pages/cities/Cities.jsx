import "../cities/cities.css";
import GoTo from "../../components/GoTo";
import MainCities from "../../components/MainCities";

export default function Cities() {
  return (
    <>
      <div className="headerCities">
        <h2>
          Meet our most popular locations<span className="rojo">.</span>
        </h2>
        <GoTo anchor="#cities"></GoTo>
      </div>

      <div className="bodyCities" id="cities">
        <h2>
          Cities<span className="rojo">.</span>
        </h2>
        <div className="citiesPhrase">
          <p>The most populars cities, visited by our travelers...</p>
        </div>
        <MainCities />
      </div>
    </>
  );
}

import React, { useRef } from 'react'
import CardCity from '../../components/CardCity';
import GoTo from '../../components/GoTo';
import Label from '../../components/Label';
import places from '../../data/cities';
import '../cities/cities.css';

export default function Cities() {

    let continents = [...new Set ([...places].map(place=>place.continent))]

    console.log(continents);
    console.log(typeof(continents));

    let contContinents= useRef()
    console.log(contContinents);
    console.log(typeof(contContinents));
    


  return (
        <>
    

        <div className='headerCities'>
            <h2>Meet our most popular locations<span className="rojo">.</span></h2>
            <GoTo anchor="#cities"></GoTo>
        </div>

        <div className='bodyCities' id='cities'>
            <h2>Cities<span className="rojo">.</span></h2>
            <div className='citiesPhrase'>
                <p>The most populars cities, visited by our travelers...</p>
            </div>
            <form className='inputs' ref={contContinents}>

                <fieldset className='checkboxs' >
                    {continents.map(continent=><Label continent={continent}></Label>)}
                </fieldset>

                <fieldset>
                    <label>Search for name of city
                        <input type="text" className='searchForText'/>
                    </label>
                </fieldset>
                    
            </form>
            <div className='mainCities'>                
            
                {places.map(place=><CardCity city={place}/>)}
                
            </div>
        </div>


        </>

  )
}

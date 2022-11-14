import React from 'react'
import { useParams } from 'react-router';
import places from "../data/cities";

export default function CardDetailsCity() {

    const {id} = useParams()
    
    let place = places.find(place=> place.id === id)


  return (

    

    <div className='cardDetailsCity'>

        <div className='imagenCardDetails'>
            <img src={place.photo} alt="" />
        </div>
        <div className='informacionCardDetails'>

            <h3><span className="rojo">|</span>{place.name}</h3>
            <p>This places is ubicated in {place.continent}.</p>
            <p>Have a population of {place.population} peoples.</p>
            

        </div>

    </div>
  )
}

import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import places from "../data/cities";

export default async function CardDetailsCity() {

    const {id} = useParams()
    
    let place = places.find(place=> place.id === id)

    /* let [place, setPlace] = useState({}) */

    useEffect=(()=>{

      axios.get("http://localhost:8000/api/cities")
      .then((response)=> console.log(response))


    },[])




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

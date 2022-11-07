import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CardCity(props) {
    let {city}=props
  return (
    <div className='cardCity'>
        <div className='imgCard'>
         <img src={city.photo} alt="{city.name}" />
        </div>
        <h4>{city.name}</h4>
        <div className='btn-details'>
          <NavLink to={`/details/${city.id}`} style={{textDecoration: 'none', color: 'white'}}>
            <p>More details</p>
          </NavLink>
        </div>
    </div>
  )
}

import React from 'react'

export default function CardCity(props) {
    let {city}=props
  return (
    <div className='cardCity'>
        <div className='imgCard'>
         <img src={city.photo} alt="{city.name}" />
        </div>
        <h4>{city.name}</h4>
        <div className='btn-details'>
            <p>More details</p>
        </div>
    </div>
  )
}

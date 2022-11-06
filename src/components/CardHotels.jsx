import React from 'react'

export default function CardHotels(props) {
    let {hotel}=props
  return (
    <div className='cardCity'>
        <div className='imgCard'>
         <img src={hotel.photo[0]} alt="{hotel.name}" />
        </div>
        <h4>{hotel.name}</h4>
        <div className='btn-details'>
            <p>More details</p>
        </div>
    </div>
  )
}

import React from 'react'
import { useNavigation } from 'react-router';
import CardDetailsCity from '../../components/CardDetailsCity';
import ItineraryHotel from '../../components/ItineraryHotel';
import "../detailscities/detailscity.css";

export default function DetailsCity() {

    

  return (
    <>
    <div className='detailscity'>
        <CardDetailsCity/>
    </div>
    <div className='informationCities'>
        <h2>Hotels<span className="rojo">.</span></h2>
        <div className='hotelsfromcities'>

            <ItineraryHotel/>
           

        </div>
    </div>
    </>
  )
}

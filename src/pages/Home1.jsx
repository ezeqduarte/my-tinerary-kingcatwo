import React from 'react'
import CallToAction from '../components/CallToAction'
import NavBar from '../components/NavBar'

export default function Home1() {
    
  return (
    <div className='Home1'>       
        <div className='container'>
            <NavBar/>            
            <div className='home1_container'>
                <h1>Know the world<span className="rojo">.</span></h1>
                <div>
                        <CallToAction text="CITIES" rute="/cities"/>
                        <CallToAction text="HOTELS" rute="/hotels"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

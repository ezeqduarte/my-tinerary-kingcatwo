import React from 'react'
import AutoToTop from '../components/AutoToTop'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Main(props) {
  return (

    <>
        <NavBar/>
        <AutoToTop/>
        <div className='Main'>
            {props.children}
        </div>
        <Footer/>

    </>

  )

}
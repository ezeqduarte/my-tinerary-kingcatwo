//Creando un layout ya que estos elementos se van a repetir en todas las páginas por lo que sería perder el tiempo estar colocandolos una y otra vez.
//Vamos a importarnos todo lo que se repita: El Navbar, el componente que hace que la página empiece desde arriba, el boton que nos sirve para volver al inicio y el footer.

import React from 'react'  // importo react from react para tenerlo disponible
import AutoToTop from '../components/AutoToTop' //importo componente autototop
import BackToTopButton from '../components/BackToTopButton' // importo boton para volver al inicio
import Footer from '../components/Footer' // importo footer
import NavBar from '../components/NavBar' // importo navbar 

//arranco con el RFC y le doy como nombre main, le aviso que le voy a pasar "props"
export default function Main(props) {
  return (

    // para evitar que nos tire error encerramos todo dentro de un div
    <>
        <NavBar/> 
        <AutoToTop/> 
        <div className='Main'> 
            {props.children}
        </div>
        <BackToTopButton/> 
        <Footer/> 

    </>

  )

}

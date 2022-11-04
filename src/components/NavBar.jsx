import React from 'react'
import {Link as NavLink} from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {

    let [mostrar, setMostrarOcultar] = useState (true)
    let change = () => {
        
        setMostrarOcultar(!mostrar)        
        
    }

    let [mostrarMenu, setMostrarMenu] = useState (false)
    let menu = () => {
        
        setMostrarMenu(!mostrarMenu)       
       
    }

  return (
    <header>
        <img className='logo-grande' src="./img/logo_grande.png" alt=""/> 

        { mostrarMenu 
        ? (<div className='flex-menu'>              
        <img src="./img/menu-rounded.png" onClick={menu} alt="menu"/>
        <div className='menu'>

        <NavLink to="/home" style={{textDecoration: 'none'}}>
            <button>HOME<span className="rojo">.</span></button> 
        </NavLink>

        <NavLink to="/cities" style={{textDecoration: 'none'}}>
            <button>CITIES<span className="rojo">.</span></button>
        </NavLink>
        <NavLink to="/hotels" style={{textDecoration: 'none'}}>
            <button>HOTELS<span className="rojo">.</span></button>    
        </NavLink>            

        </div>
    </div>)
        : (<div className='flex-menu'>              
        <img src="./img/menu-rounded.png" onClick={menu} alt=""/>
    </div>)


        }

        
        
        <nav>
            <ul>
                <NavLink to="/home" style={{textDecoration: 'none'}}>
                    <li>HOME</li>
                </NavLink>
                <NavLink to="/cities" style={{textDecoration: 'none'}}>
                    <li>CITIES</li>
                </NavLink>
                <NavLink to="/hotels" style={{textDecoration: 'none'}}>
                    <li>HOTELS</li>
                </NavLink>
            </ul>
        </nav>
        {   mostrar 
            ? ( <div className='login'>              
            <img src="./img/login.png" onClick={change} alt=""/>
        </div>)
            : (<div className='login'>              
            <img src="./img/login.png" onClick={change} alt=""/>
            <div className='datosLogin'>
            <NavLink to="/login" style={{textDecoration: 'none'}}>
                <button>LOGIN</button>
            </NavLink>
            <NavLink to="/logout" style={{textDecoration: 'none'}}>
                <button>LOGOUT</button>
            </NavLink>

            </div>
        </div>)

        }
        
        
    </header>
  )
}


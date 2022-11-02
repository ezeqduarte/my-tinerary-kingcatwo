import React from 'react'
import {Link as NavLink} from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {

    let [mostrar, setMostrarOcultar] = useState (true)
    let change = () => {
        setMostrarOcultar(!mostrar)
        console.log(mostrar);
    }

    let [mostrarMenu, setMostrarMenu] = useState (false)
    let menu = () => {
        setMostrarMenu(!mostrarMenu)
        console.log(mostrarMenu);
    }

  return (
    <header>
        <img className='logo-grande' src="./img/logo_grande.png" alt=""/> 

        { mostrarMenu 
        ? (<div className='flex-menu'>              
        <img src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png" onClick={menu} alt=""/>
        <div className='menu'>

            <button>HOME</button>
            <button>CITIES</button>
            <button>HOTELS</button>                

        </div>
    </div>)
        : (<div className='flex-menu'>              
        <img src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png" onClick={menu} alt=""/>
    </div>)


        }

        
        
        <nav>
            <ul>
                <NavLink to="/home">
                    <li>HOME</li>
                </NavLink>
                <NavLink to="/cities">
                    <li>CITIES</li>
                </NavLink>
                <NavLink to="/hotels">
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

                <button>LOGIN</button>
                <button>LOGOUT</button>

            </div>
        </div>)

        }
        
        
    </header>
  )
}

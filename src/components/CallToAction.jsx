import React from 'react'
import {Link as NavLink} from 'react-router-dom'

export default function CallToAction(props) {
    let {text, rute}=props
    console.log(rute);
  return (
    <NavLink to={rute} style={{textDecoration: 'none'}}>
    <button className='buttonCallToAction' >
    {text}
    </button>
    </NavLink>
  )
}

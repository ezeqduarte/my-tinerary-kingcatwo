import React, { useRef } from 'react'

export default function Label(props) {

    let {continent}=props
    let checboxRef = useRef()     

  return (
    <label>{continent}
        <input type="checkbox" ref={checboxRef} value={continent} />
    </label>
  )
}

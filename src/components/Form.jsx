import React from 'react'
import { useRef, useState, useEffect } from "react";
import { ReactDOM } from 'react';


export default function Form() {

    
  let firstName = React.useRef()
  let lastName = React.useRef()
  let email = React.useRef()
  let password = React.useRef()
  let form = React.useRef()

  function submitNewUser(event) {

    event.preventDefault();

    let newUser = {

        name: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,

    }

    localStorage.setItem('newUser', JSON.stringify(newUser)) 
    form.current.reset()
  }

  return (


                    <form className='form_signup' onSubmit={submitNewUser} ref={form}>
                    
                        <label>First name
                            <input type="text" required="true" name='f-name' placeholder='Enter your first name' ref={firstName} />
                        </label>
                    
                        <label>Last name
                            <input type="text" required="true" name='l-name' placeholder='Enter your last name' ref={lastName} />
                        </label>
                    
                        <label>Email
                            <input type="email" required="true" name='email' placeholder='Enter your email' ref={email} />
                        </label>
                    
                        <label>Password
                            <input type="password" required="true" pattern="^[0-9]*[A-Za-z0-9]+[0-9]+$" autocomplete="off" name='password' placeholder='Enter your password' ref={password} />
                        </label>
                
                        <button className='btn-enviar'>Send</button>
            
                    </form>


  )
}

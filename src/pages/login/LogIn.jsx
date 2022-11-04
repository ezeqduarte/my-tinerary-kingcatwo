import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import FormLogIn from '../../components/FormLogIn';
import NavBar from '../../components/NavBar'
import '../login/login.css';

export default function LogIn() {


  return (
    <div className='page_form'>
        <NavBar/>

        <div className="container_form">
            <div className='form'>
                <div className='createacc'>
                    <h2>Log in with your Account</h2>
                   
                   
                   
                   <FormLogIn></FormLogIn>

                </div>
                <div className='already_acc'>
                       
                        <div className='buttons-form'>
                       
                       
                        <h3 className='rojo'>You dont have an account?</h3>
                        <NavLink to="/signup" style={{textDecoration: 'none'}}>
                            <button className='buttonsignin'>Create account</button>
                        </NavLink>
                       
                        </div>
                </div>
            
            </div>
        </div>

        
    </div>
    
  )
}

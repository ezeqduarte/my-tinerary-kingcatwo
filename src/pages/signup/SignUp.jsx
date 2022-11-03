import React from 'react'
import NavBar from '../../components/NavBar'
import '../signup/signup.css';

export default function SignUp() {
  return (
    <div className='page_form'>
        <NavBar/>

        <div className="container_form">
            <div className='form'>
                <div className='createacc'>
                    <h2>Create your account</h2>
                    <form className='form_signup'>
                        <label>First name
                            <input type="text" name='f-name' placeholder='Enter your first name' />
                        </label>
                        <label>Last name
                            <input type="text" name='l-name' placeholder='Enter your last name' />
                        </label>
                        <label>Email
                            <input type="email" name='email' placeholder='Enter your email' />
                        </label>
                        <label>Password
                            <input type="email" name='email' placeholder='Enter your password' />
                        </label>
                        <input className='btn-enviar' type="submit"/>
            
                    </form>
                </div>
                <div className='already_acc'>
                        <h3 className='rojo'>Already has an account?</h3>
                        <div className='buttons-form'>
                            <button className='buttonsignin'>Sign in with account</button>
                            <button className='buttonsignin'> Sign in with <img src="https://img.icons8.com/color/28/null/google-logo.png"/>oogle</button>
                        </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

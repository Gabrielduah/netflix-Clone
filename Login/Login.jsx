import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import SingIn from '../SignIn/SingIn'

const Login = () => {

    const [signIn, setSignIn] = useState(false);
    
  return (
    <div className='login'>
        <div className='login_header'>
            <div className='login_header_logo'>
                <img src='logo.png'/>
            </div>
            <div className='login_header_button'>
                <button className='signin' onClick={() => setSignIn(true)}>Sign In</button>
            </div>
        </div>

        <div className='login_forms'>

            {signIn ? (
                <SingIn/>
            ) : (
                <>
                    <div className='logo_forms_description'>
                        <h3>Unlimited mvoies, Tv shows, and more..</h3>
                        <h2>Watch anywhere. Cancel anytime</h2>
                    </div>
                    <form>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className='logo_forms_inputs'>
                    
                            <div className='logo_forms_input'>
                                <input type="email" placeholder="email address" required/>
                            </div>
                            <button className='get' onClick={() => setSignIn(true)} >Get Started</button>
                        </div>
                    </form>
                </>
            )}


           
           

        </div>
    </div>
  )
}

export default Login
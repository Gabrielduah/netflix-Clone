import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import './signin.css'

const SingIn = () => {
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [password, setPassword] = useState("");
 

  //creating the function to add to database
  const register = async(e) => {
    e.preventDefault();
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, password);
      console.log(user)
    }catch(error) {
      alert(error.message);
    }
  }

  const signin = async(e) =>{
    e.preventDefault();
    try{
      const user = signInWithEmailAndPassword(auth, registerEmail, password)
      console.log(user);
    }catch(error){
      alert(error.message); 
    }
  }
  


  return (
    <div className='signup'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='email' onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}/>
            <input  type= "password" placeholder='password' onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <button type ="submit" onClick={signin} >Sign In</button>
            <p>New to netflix? <span className='email_links' onClick={register}> Sign Up now</span></p>
        </form>
    </div>
  )
}

export default SingIn
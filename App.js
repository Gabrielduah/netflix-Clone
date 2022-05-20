import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/counter/userSlice';
import Profile from './Components/Profile/Profile';

function App() {
  const user = useSelector(selectuser);

  //using the dispatch hook
  const dispatch = useDispatch();

  //using the use
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }else {
        //loged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);


  return (

     <div className='app'>
        <Router>
          {!user ? (
            <Login/> 
          ) : ( <Routes>
              <Route exact path="/" element={  <HomeScreen/>}/>
              <Route path="/profile" element= {<Profile/>}/>
            </Routes>
              )}
           
          </Router>
     </div>
  );

}

export default App;

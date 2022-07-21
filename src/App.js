import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, IndexRoute,hashHistory,browserHistory} from "react-router-dom";
import 'animate.css';
import Header from './Header'
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Signup from './Signup';
import Teslaaccount from './Teslaaccount';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //User is signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        //User is signed out
        dispatch(logout())

      }
    })
  },[dispatch])

  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={
            <Fragment>
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              { isMenuOpen && <Menu /> }
              <HeaderBlock />
            </Fragment>
          } 
        /> 
        <Route path="/login" element={
          user ? <Navigate to="/teslaaccount" /> : <Login />
          } 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teslaaccount" element={
          <Fragment>
          { !user ? <Navigate to="/login" /> : <Teslaaccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> }
          { isMenuOpen && <Menu /> }
          </Fragment>
        } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

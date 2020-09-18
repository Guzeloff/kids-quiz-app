import React, { useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import QuizGame from './components/QuizGame'
import Info from './components/Info';
import Parents from './components/Parents'
import Login from './components/Login';

import {auth} from './firebase'
import { useSelector , useDispatch } from 'react-redux'
import GameInfo from './components/GameInfo';


function App () {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => { //useEffect - isto kako da koristime vo klasnite komponenti store  //piece of code that runs on a given condition
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        ///user is logged in
        dispatch({
          type : 'LOGIN',
          user : authUser
        })
      }
      else {
        //user is logged out
        dispatch({
          type : 'LOGIN',
          user : null
        })
      }
    })
  },[user])

  console.log('USER IS >>>' , user)

    return (
      <div className="App">
      <Router>
      <Route
        path="/gameinfo"
        >
          <GameInfo/>
        </Route> 
        <Route
        path="/login"
        >
          <Login/>
        </Route> 
        <Route
        path="/quizgame">
            <QuizGame/>
            </Route>
          <Route
          path="/info">
            <Info/>
            </Route>
          <Route
          path="/parents"
          >
            {user ? (<Parents/>) : (<Login/>)}
          </Route>
          <Route
          exact={true}
          path="/">
          <LandingPage/>
          </Route>
      </Router>
       </div>
      
    );
  }
export default  App


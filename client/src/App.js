import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import Register from './components/Register'
import Login from './components/Login'
import List from './components/List'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/restaurants'>
          <Restaurants />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App


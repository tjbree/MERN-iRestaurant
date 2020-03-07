import React from 'react'
import { Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Restaurant from './components/Restaurant'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <Restaurant />
        </Route>
        <Route path="/list">list</Route>
        <Route path="/log">log</Route>
      </Switch>
    </div>
  )
}

export default App


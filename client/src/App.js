import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import List from './components/List'
import { fetchList } from './actions/listAction'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList(1))
  }, [dispatch])
  
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
        <Route path='/log'>log</Route>
      </Switch>
    </div>
  )
}

export default App


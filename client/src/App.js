/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Box } from '@material-ui/core'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Body from './components/Body/Body'
import Header from './components/MainPageTitle/MainPageTitle'
import './main.css'
import FocusFilm from './components/FocusFilm/FocusFilm'
import HeaderFilm from './components/Header/Header'

function App() {
  return (
    <Router>
      <Box className="App">
        <HeaderFilm />
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
          </Route>
          <Route path="/film/:id">
            <FocusFilm />
          </Route>
        </Switch>
      </Box>
    </Router>
  )
}

export default App

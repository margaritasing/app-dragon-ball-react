import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import AppRoute from './AppRouter'

const LoginRouter = () => {
  return (
      <Router>
      <AppRoute />
        <Switch>
            <Route exact path="/login" component={LoginScreen} />                 
        </Switch>      
      </Router>   
  )
}

export default LoginRouter
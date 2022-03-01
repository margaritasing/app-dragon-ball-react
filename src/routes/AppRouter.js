import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomanScreen from '../pages/WomanScreen'

const AppRouter = () => {
  return (
    <>
    <Navbar />
        <Switch> 
            <Route exact path="/mans" component={ManScreen} />
            <Route exact path="/womans" component={WomanScreen} />
            <Route exact path="/Search" component={SearchScreen} /> 
              
          {/* <Redirect to="/mans"/>*/}    
        </Switch>   
    </>
  )
}

export default AppRouter
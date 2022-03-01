import React from 'react'
import { Switch, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <>
        <Switch> 
        <Route exact path="/mans" component={} />
        <Route exact path="/womans" component={} />
        <Route exact path="/Search" component={} />
           
        </Switch>   
    </>
  )
}

export default AppRouter
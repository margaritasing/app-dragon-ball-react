import React, {lazy, Suspense }from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'
 import Navbar from '../components/Navbar'
const CharacterScreen = lazy(()=> import('../pages/CharacterScreen'))
const ManScreen = lazy(()=> import('../pages/ManScreen'))
const SearchScreen = lazy(()=> import('../pages/SearchScreen'))
const WomanScreen = lazy(()=> import('../pages/WomanScreen'))

const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route exact path="/mans" component={ManScreen} />
            <Route exact path="/womans" component={WomanScreen} />
            <Route exact path="/Search" component={SearchScreen} /> 
            <Route exact path="/character/:id" component={CharacterScreen} /> 
            <Redirect to="/mans"/>    
        </Switch>   
    </Suspense>
    </>
  )
}

export default AppRouter
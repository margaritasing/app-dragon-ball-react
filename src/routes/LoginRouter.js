import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginScreen from '../pages/LoginScreen'
import AppRouter from './AppRouter'

import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const LoginRouter = () => {

  

  return (
      <Router>
        <Routes>
          <Route path="/login" element={
            <PublicRouter>
              <LoginScreen/>            
            </PublicRouter>
          }/>      
          <Route path="*" element={
            <PrivateRouter>
              <AppRouter/>            
            </PrivateRouter>
          }/>       
          </Routes>    
          
          
              
      </Router>   
  )
}

export default LoginRouter
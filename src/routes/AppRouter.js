import React, {lazy, Suspense }from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
        <Routes>
            <Route path="/mans" element={<ManScreen/>} />
            <Route path="/womans" element={<WomanScreen/>} />
            <Route path="/Search" element={<SearchScreen/>} /> 
            <Route path="/character/:id" element={<CharacterScreen/>} /> 
            <Route path="*" element={<Navigate to="mans" />}/>
          
        </Routes>   
    </Suspense>
    </>
  )
}

export default AppRouter
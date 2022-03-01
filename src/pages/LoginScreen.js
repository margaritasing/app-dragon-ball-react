import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LoginScreen = ({history}) => {
    
    const handleLogin = () => {
        history.push("./mans")
    }
  return (
    <div className='container mt-5 text-center'>
        <img src='/assets/animate.gif' alt='animacion' />
        <h1 className='my-3'> Login Screen</h1>
        <button className='btn btn-primary' onClick={handleLogin}> Login</button>    
    </div>
  )
}

export default LoginScreen
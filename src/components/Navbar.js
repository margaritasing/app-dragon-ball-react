import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
    const history = useHistory()

    const handleLogout = () =>{
        history.replace("/login")
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
    <div className="container-fluid">
      <h2 className="navbar-brand text-white">Db App</h2>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse offset-8" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <NavLink activeClassName="active text-white" className="nav-link" aria-current="page" to="./mans" >Mans</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active text-white"  className="nav-link" to="./womans">Womans</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active text-white" className="nav-link" to="./Search">Search</NavLink>
          </li>         
        </ul>
        <div className='d-flex'>
            <button className='btn btn-danger ms-4'onClick={handleLogout}>Logout</button>        
        </div>
      </div>
    </div>
  </nav>
    
  )
}

export default Navbar
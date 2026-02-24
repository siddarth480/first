import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div> 
      <div id="link" style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "50px" }}>

        <Link className="nav-link" to="/">Home</Link>
        <NavLink  to="/about" className={({ isActive }) => isActive ? "active-link" : "normal-link" }>  About</NavLink>
        <Link className="nav-link" to="/con_ren">Conditional Rendering</Link>
        <Link className="nav-link" to="/usestate">UseState</Link>
        <Link className="nav-link" to="/state">State</Link>
        <Link className="nav-link" to="/useEffect">UseEffect</Link>
        <Link className="nav-link" to="/event">Event</Link>
        <Link className="nav-link" to="/add_item">Add Item</Link>
        <Link className="nav-link" to="/useref">UseRef</Link> 
        <Link className="nav-link" to="/class_com">Class Component</Link>
        <Link className="nav-link" to="/users"> State passing Users</Link>
        <Link className="nav-link" to="/post">API Calling</Link> 
      </div>


      <div id="link" style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "50px" }}>

        <Link className="nav-link" to="/api_sta_call">API Calling Standard</Link> 
        <Link className="nav-link" to="/api_axios">API Calling Axios</Link> 
      </div>
    </div>
  )
}

export default NavBar

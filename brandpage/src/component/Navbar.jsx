import React from 'react'
import "../component/Navbar.css"
const Navbar = () => {
  return (
    <div>
      
      <nav className='container'>
  
        <div> 
            <img src="/assets/brand_logo.png" alt="" />
        </div>

        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar

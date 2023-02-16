import React from 'react'
import "./navbar.scss"
import homepage from "./homepage.png"

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navContainer">
        <div className="navItem">
          <img className= "photo" src={homepage} alt = "nopic"/>
          <span>Transit Pro</span>
        </div>

       </div>
   
    </div>
  )
}

export default Navbar
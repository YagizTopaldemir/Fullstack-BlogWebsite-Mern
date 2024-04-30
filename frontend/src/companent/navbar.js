import React from 'react'
import "../css/navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  
  return (
    <div className='navbar-container'>
        <div className='navbar'>
          <p className='brandname'>YAGIZ<span style={{color:'#0d6e55',fontWeight:'700',fontSize:'25px'}}>BLOG</span></p>
          <div className='navbar-page'>
           <Link style={{textDecoration:'none',color:'white'}} to="/"> <p>MY BLOG</p></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/About"><p>ABOUT ME</p></Link>  
        <Link style={{textDecoration:'none',color:'white'}} to="/Contact"><p> CONTACT</p></Link>
        <Link style={{textDecoration:'none',color:'white'}} to="/Search"><p> SEARCH</p></Link>
          </div>
        </div>
        <p className='navbar-text'>Our Fresh News</p>
    </div>
  )
}

export default Navbar
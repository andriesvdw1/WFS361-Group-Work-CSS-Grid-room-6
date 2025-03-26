import React from 'react'
import './NavItem.css'
function NavItem() {
    
    return (
        <div className='nav-item'>
    <li className='home-link'><a href ="#">Home</a></li>
    <li className='products-link'><a href ="#">Products</a></li>
    <li className='services-link'><a href ="#">Services</a></li>
    <li className='team-link'><a href ="#">Team</a></li>
    <li className='portfolio-link'><a href ="#">Portfolio</a></li>
    <li className='blog-link'><a href ="#">Blog</a></li>    
    <li className='contact-link'><a href ="#">Contact</a></li>
    <li className='go-link'><a href ="#">Go My Blog</a></li>
    </div>
  )
}

export default NavItem
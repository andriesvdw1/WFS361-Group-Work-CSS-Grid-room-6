import React from 'react'
import NavItem from './NavItem'
import './Nav.css'
function Nav() {
  return (
    <nav className='nav'>
        <ul style={{listStyle:"none"}}><NavItem/></ul>
    </nav>
  )
}

export default Nav
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='main_nav'>
        <NavLink exact to='/' className='nav_link' activeClassName="active_class">About</NavLink>
        <NavLink exact to='/contact'  className='nav_link' activeClassName="active_class">Contact</NavLink>
        <NavLink exact to='/user/shalvi' className='nav_link' activeClassName="active_class" >User</NavLink>
        <NavLink className='nav_link' exact to='/Search' activeClassName="active_class">Search</NavLink>
        <NavLink className='nav_link' exact to='/services' activeClassName="active_class">Services</NavLink>
      </div>

    </>
  )
}

export default Navbar

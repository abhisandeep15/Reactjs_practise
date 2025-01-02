import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 text-blue-500'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/pastes">
            All Paste
        </NavLink>
    </div>
  )
}

export default Navbar

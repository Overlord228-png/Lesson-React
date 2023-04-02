import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
        </ul>
    </header>
  )
}

export default Header
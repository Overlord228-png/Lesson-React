import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/comments">Comments</NavLink></li>
            </ul>
        </header>
    )
}

export default Header
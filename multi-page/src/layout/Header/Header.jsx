import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
        <nav className='flex gap-4'>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/sobre" end>
                Sobre
            </NavLink>
            <NavLink to="/blog">
              Blog
            </NavLink>

        </nav>
    </div>
  )
}

export default Header
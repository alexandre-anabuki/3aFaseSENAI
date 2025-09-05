import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-gray-200'>
        <nav className='flex gap-4'>
            <NavLink to="/" end className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}>
                Home
            </NavLink>
            <NavLink to="/sobre" end className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}>
                Sobre
            </NavLink>
            <NavLink to="/blog" end className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}>
              Blog
            </NavLink>

        </nav>
    </header>
  )
}

export default Header
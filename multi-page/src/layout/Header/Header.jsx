import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/sobre" end>
                Sobre
            </NavLink>

        </nav>
    </div>
  )
}

export default Header
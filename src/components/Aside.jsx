import React from 'react'
import { NavLink } from 'react-router'

function Aside() {
  return (
    <aside>
        <nav>
            <NavLink to="/products/categoria1">categoria1</NavLink>
            <NavLink to="/products/categoria2">categoria2</NavLink>
            <NavLink to="/products/categoria3">categoria3</NavLink>
            <NavLink to="/products/categoria4">categoria4</NavLink>
            <NavLink to="/products/categoria5">categoria5</NavLink>
        </nav>
    </aside>
  )
}

export default Aside
import React from 'react'
import Text from './Text'
import { NavLink } from 'react-router'
import Cart from './Cart'

function Navbar() {
  return (
    <header className='header__content' >  
        <div className='header__container'>
              <NavLink to="/" >
                <Text as="h1" text="Juguetería Cósmica" />
              </NavLink>
            <nav>
            
                <NavLink to="/Alta" >Alta</NavLink>
                <NavLink to="/Contacto" >Contacto</NavLink>
                <NavLink to="/Nosotros" >Nosotros</NavLink>
                <NavLink> <Cart /></NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
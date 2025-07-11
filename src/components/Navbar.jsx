import React from 'react'
import Text from './Text'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <header className='header__content' >  
        <div className='header__container'>
              <NavLink to="/" >
                <Text as="h1" text="Juguetería Cósmica" />
              </NavLink>
            <nav>
            
                <NavLink to="/Contacto" >Contacto</NavLink>
                <NavLink to="/Alta" >Alta</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import Text from './Text'
import { NavLink } from 'react-router'
import Cart from './Cart'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Navbar() {
  return (
    <header className='header__content' >  
        <div className='header__container'>
              <NavLink to="/" >
                <Text as="h1" > Juguetería Cósmica</Text>
              </NavLink>
            <Box as="nav">
            
                <NavLink to="/Alta" >Alta</NavLink>
                <NavLink to="/Contacto" >Contacto</NavLink>
                <NavLink to="/Nosotros" >Nosotros</NavLink>
                <NavLink> <Cart /></NavLink>
            </Box>
            <Box as="navbar__menu-button">
              <Button  label={<FontAwesomeIcon icon={faBars} size='xl' />} />
                
             
                
            </Box>
        </div>
    </header>
  )
}

export default Navbar
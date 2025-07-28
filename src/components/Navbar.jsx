import React, { useState } from 'react'
import Text from './Text'
import { NavLink } from 'react-router'
import Cart from './Cart'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import DrawerMenu from './DrawerMenu'

function Navbar() {

  const [openMenuDrawer, setopenMenuDrawer] = useState(false)

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
            <Box  className="navbar__menu-mobile">
              <NavLink> <Cart /></NavLink>
              <Button 
               className="btn btn__primary btn__solid navbar__menu-button" 
               label={<FontAwesomeIcon icon={faBars} size='xl' />} />
                
             
                
            </Box>
        </div>
        <DrawerMenu></DrawerMenu>
    </header>
  )
}

export default Navbar
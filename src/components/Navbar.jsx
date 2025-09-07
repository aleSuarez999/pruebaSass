import React, { useState } from 'react'
import Text from './Text'
import { NavLink } from 'react-router'
import Cart from './Cart'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import DrawerMenu from './DrawerMenu'
import Aside from './Aside'
import brandImage from "../assets/logo.png"

function Navbar() {

  const [openMenuDrawer, setopenMenuDrawer] = useState(false)

  return (
    <header className='header__content' >  
        <div className='header__container'>
          <NavLink to="/" >
            <img src={brandImage} height="55"  />
            </NavLink>
            <NavLink to="/" >
               
                <Text as="h1" > Juguetería Cósmica</Text>
            </NavLink>
            <Box as="nav">
            

                <NavLink to="/Contacto" >Contacto</NavLink>
                <NavLink to="/Nosotros" >Nosotros</NavLink>
                <NavLink to="/Alta" >Alta</NavLink>
                <NavLink to="/MensajesRecibidos" >Mensajes</NavLink>
                <NavLink> <Cart /></NavLink>
            </Box>
            <Box  className="navbar__menu-mobile">
              <NavLink> <Cart /></NavLink>
              <Button 
               className="btn btn__primary btn__solid navbar__menu-button" 
               label={<FontAwesomeIcon icon={faBars} size='xl' />} 
               onClick={() => setopenMenuDrawer(true)}
               />
                
             
                
            </Box>
        </div>
        <DrawerMenu show={openMenuDrawer} closeMenu={() => setopenMenuDrawer(false)}>

            <Box as="nav" className="navbar__drawer-menu">
              <ul>
                <li><NavLink to="/Alta" onClick={() => setopenMenuDrawer(false)} >Alta</NavLink></li>
                <li><NavLink to="/Contacto" onClick={() => setopenMenuDrawer(false)}>Contacto</NavLink></li>
                <li><NavLink to="/Nosotros" onClick={() => setopenMenuDrawer(false)}>Nosotros</NavLink></li>
                <li><NavLink to="/" onClick={() => setopenMenuDrawer(false)}>Productos</NavLink></li>
                </ul>
               
            </Box>

              <Aside />
        </DrawerMenu>
    </header>
  )
}

export default Navbar
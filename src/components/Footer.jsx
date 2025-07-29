import React from 'react'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Text from './Text'
import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className='footer__content' >
        <div className='footer__container'>
                <Text as="p">Jugueteria Cosmica</Text>
                <Box className="footer__social">
                    <NavLink ><FontAwesomeIcon className="footer__socialmedia-links" icon={faFacebook} /></NavLink>
                    <NavLink ><FontAwesomeIcon className="footer__socialmedia-links" icon={faInstagram} /></NavLink>
                   <NavLink > <FontAwesomeIcon className="footer__socialmedia-links" icon={faYoutube} /></NavLink>
                </Box>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Text from './Text'

function Footer() {
  return (
    <footer className='footer__content' >
        <div className='footer__container'>
                <Text as="p">Jugueteria Cosmica</Text>
                <Box className="footer__social">
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faFacebook} />
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faInstagram} />
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faYoutube} />
                </Box>
        </div>
    </footer>
  )
}

export default Footer
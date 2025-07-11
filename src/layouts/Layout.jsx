import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Aside from '../components/Aside'
import Container from '../components/Container'

function Layout() {
    // children trae la pagina como children
  return (
    <>
        <Navbar />
        <Aside />
          <Container>
          { <Outlet /> }
          </Container>
        <Footer />
    </>
  )
}

export default Layout
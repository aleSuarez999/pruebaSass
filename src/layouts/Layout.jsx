import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Aside from '../components/Aside'
import Container from '../components/Container'

function Layout() {
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
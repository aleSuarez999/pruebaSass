import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function Layout() {
    // children trae la pagina como children
  return (
    <>
        <Navbar />
        { <Outlet /> }
        <Footer />
    </>
  )
}

export default Layout
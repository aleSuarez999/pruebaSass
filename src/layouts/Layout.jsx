import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Aside from '../components/Aside'

function Layout() {
    // children trae la pagina como children
  return (
    <>
        <Navbar />
        <Aside />
        <div id='main' className='container'>
          { <Outlet /> }
        </div>
        <Footer />
    </>
  )
}

export default Layout
import React from 'react'
import Text from '../components/Text'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
    <Navbar />
        <Text as="h2" text="home" />
    <Footer />
    </>
  )
}

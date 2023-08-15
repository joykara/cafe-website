import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import { About, Footer, Gallery, Products, Review } from '../components'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Products />
      <Review />
      <Footer />
    </>
  )
}

export default Homepage
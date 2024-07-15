import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Clients from './components/Clients'
import Services from './components/Services'
import Features from './components/Features'
import Product from './components/Product'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Clients/>
      <Services/>
      <Features/>
      <Product/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App

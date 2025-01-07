import Navbar from './components/Navbar'
import Home from './components/Home'
import Clients from './components/Clients'
import Services from './components/Services'
import Features from './components/Features'
import Product from './components/Product'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>


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

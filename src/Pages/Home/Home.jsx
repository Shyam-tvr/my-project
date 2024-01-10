import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Cards from '../../Components/Cards/Cards'
import Content from '../../Components/content/Content'
import Carousel from '../../Components/Carousel/Carousel'
import Testmonials from '../../Components/Testmonials/Testmonials'
import Culture from '../../Components/Culture/Culture'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Sample from '../../Components/sample'

const Home = () => {
  return (
    <div className='bg-black '>
        <Navbar />
        <Banner />
        <Cards />
        <Content />
        <Carousel />
        <Culture />
        <Testmonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
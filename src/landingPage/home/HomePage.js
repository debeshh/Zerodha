import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Education from './Education'
import Stats from './Stats'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Awards />
      <Education />
      <Stats/>
      <Pricing/>
      <OpenAccount/>
      <Footer/>
    </div>
  )
}

export default HomePage

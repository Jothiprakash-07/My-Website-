import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skill/Skills'
import Tools from './Components/Tool/Tools'
import Pro from './Components/Portfolio/Pro'
import Company from './Components/Company/Timeline'
import Footer from './Components/Footer/Footer'




function App() {
  return (
    <div>
      <Navbar/>  
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Pro />  
      <Company />
      <Footer />
     
    </div>
  )
}

export default App

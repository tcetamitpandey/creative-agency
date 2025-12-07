import { useState } from 'react'
import './App.css'
// import { Outlet }

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Marque_Section from './components/Marque'
// import Temp from './components/Temp'
import H_scroll from './components/H_scroll'
import ContactUs from './components/ContactUs'
import Testimonials from './components/Testimonials'
import CustomCursor from './components/CustomCursor'
import SectionWrapper from './components/SectionWrapper'
import WhyUs from './components/WhyUs'
// import CubeFaces from './components/CubeFace' // CubeFace is used inside DualHero
import DualHero from './components/DualHero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  document.querySelectorAll("*").forEach(el => {
  const styles = getComputedStyle(el);
  if (
    styles.overflow !== "visible" ||
    styles.transform !== "none" ||
    styles.filter !== "none" ||
    styles.opacity !== "1"
  ) {
    console.log("⚠️ 3D Breaker →", el, styles.overflow, styles.transform, styles.filter, styles.opacity);
  }
});


  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionWrapper>
        <Marque_Section />
      </SectionWrapper>
      <SectionWrapper>
        <H_scroll />
      </SectionWrapper>
      {/* <SectionWrapper>
        <Temp placeholdertext= {'Start'} />
      </SectionWrapper> */}
      
      <SectionWrapper>
        <WhyUs />
      </SectionWrapper>
      <SectionWrapper>
        <DualHero />
      </SectionWrapper>
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <ContactUs />
      </SectionWrapper>
      
      {/* < Temp placeholdertext= {'End'} /> */}
      <Footer />
      
    </>
  )
}

export default App

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
  return (
    <>
      <CustomCursor />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <SectionWrapper id="marque">
        <Marque_Section />
      </SectionWrapper>

      <section id="service">
        <SectionWrapper>
          <H_scroll />
        </SectionWrapper>
      </section>

      <section id="whyus">
        <SectionWrapper>
          <WhyUs />
        </SectionWrapper>
      </section>

      <section id="about">
        <SectionWrapper>
          <DualHero />
        </SectionWrapper>
      </section>

      {/* <section id="about">
        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
      </section> */}

      <section id="contact">
        <SectionWrapper>
          <ContactUs />
        </SectionWrapper>
      </section>

      <Footer />
    </>
  );
}

export default App

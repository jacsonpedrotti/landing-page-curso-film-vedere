import React from 'react'
import AlertHeader from '../sections/AlertHeader'
import PurchaseToast from '../components/PurchaseToast'
import Hero from '../sections/Hero'
import Content from '../sections/Content'
import Features from '../sections/Features'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import PresentialCourse from '../sections/PresentialCourse'
import CourseCard from '../sections/CourseCard'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'
import WhatsappSupport from '../components/WhatsappSupport'

function App() {
  return (
    <div>
      <AlertHeader />
      <div className="brand-strip">
        <div className="container">
          <img src="/assets/logo-simples.png" alt="Logo" className="brand-strip-logo" />
        </div>
      </div>
      <main>
        <Hero />
        <Content />
        <Features />
        <Testimonials />
        <FAQ />
        <PresentialCourse />
        <CourseCard />
        <CTA />
      </main>
      <Footer />
      <WhatsappSupport />
      <PurchaseToast />
    </div>
  )
}

export default App



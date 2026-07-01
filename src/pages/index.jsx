import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import AboutUs from '../components/AboutUs';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Clients />
      <AboutUs />
      <HowWeWork />
      <Testimonials />
      <Contact />
      <ContactForm />
      <FloatingCTA />
    </>
  );
}

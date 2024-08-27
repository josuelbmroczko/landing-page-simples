import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer />
    </>
  );
};

export default Home;

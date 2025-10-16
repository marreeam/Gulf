import React from 'react'
import Hero from '@/features/hero/Hero';
import PricesSection from '@/features/prices/prices';
import ServicesSection from '@/features/servicesSection/ServicesSection';
import News from '@/features/news/News';
import BusinessCard from '@/features/BusinessCard/businessCard';
import Advantages from '@/features/advantages/Advantages';


const Landing = () => {
  return (
    <div>
      <Hero/>
      <PricesSection/>
      <ServicesSection/>
      <Advantages/>
      <News/>
      <BusinessCard/>
      </div>

  )
}

export default Landing;
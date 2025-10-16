import React from 'react'
import Hero from '@/features/hero/Hero';
import PricesSection from "@/features/prices/Prices";
import ServicesSection from '@/features/servicesSection/ServicesSection';
import News from '@/features/news/News';
const Landing = () => {
  return (
    <div>
      <Hero/>
      <PricesSection/>
      <ServicesSection/>
      <News/>
      </div>

  )
}

export default Landing;
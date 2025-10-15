import React from 'react'
import Hero from '@/features/hero/Hero';
import PricesSection from "@/features/prices/Prices";
import ServicesSection from '@/features/servicesSection/ServicesSection';
const Landing = () => {
  return (
    <div>
      <Hero/>
      <PricesSection/>
      <ServicesSection/>
      </div>

  )
}

export default Landing;
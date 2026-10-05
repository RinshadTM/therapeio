import React from 'react'
import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Therapy from '../components/home/Therapy'
import CareTeam from '../components/home/CareTeam'
import Support from '../components/home/Support'
import Blogs from '../components/home/Blogs'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <div className='pt-14'>
      <HeroSection/>
      <Support/>
      <CareTeam/>
      <Testimonials/>
      <Blogs/>
      {/* <WhyChooseUs/> */}
      {/* <Therapy/> */}
    </div>
  )
}

export default Home

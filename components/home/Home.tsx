'use client'

import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Category from './category/Category'
import Job from './job/Job'
import TopCompany from './top_company/TopCompany'
import Info from './info/Info'
import Price from './price/Price'
import Review from './review/Review'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    const initAos = async()=>{
      await import ('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }

    initAos();
  },[])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
      <Job />
      <TopCompany />
      <Info />
      <Price />
      <Review />
    </div>
  )
}

export default Home
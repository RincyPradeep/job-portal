import React from 'react'
import Hero from './hero/Hero'
import Category from './category/Category'
import Job from './job/Job'
import TopCompany from './top_company/TopCompany'
import Info from './info/Info'
import Price from './price/Price'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
      <Job />
      <TopCompany />
      <Info />
      <Price />
    </div>
  )
}

export default Home
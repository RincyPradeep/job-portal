import React from 'react'
import Hero from './hero/Hero'
import Category from './category/Category'
import Job from './job/Job'
import TopCompany from './top_company/TopCompany'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
      <Job />
      <TopCompany />
    </div>
  )
}

export default Home
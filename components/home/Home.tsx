import React from 'react'
import Hero from './hero/Hero'
import Category from './category/Category'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
    </div>
  )
}

export default Home
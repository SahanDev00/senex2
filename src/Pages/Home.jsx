import React from 'react'
import Hero from './Hero'
import HomeCategories from '../Components/HomeCategories'
import BestSelling from '../Components/BestSelling'
import RecentlyViewed from '../Components/RecentlyViewed'
import Features from '../Components/Features'


const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeCategories/>
        <BestSelling/>
        <RecentlyViewed/>
        <Features />
    </div>
  )
}

export default Home
import React from 'react'
import Banner from './features/banner'
import Services from './features/services'
import Programs from './features/programs'
import Tutor from './features/tutor'
import Ads from './features/ads'
import Blog from './features/blog'
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Programs />
      <Tutor />
          <Ads/> 
          <Blog/>
    </div>
  )
}

export default HomePage

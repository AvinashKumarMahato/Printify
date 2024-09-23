import React from 'react'
import Hero from '../components/hero'
import Features from '../components/features'
import AddProduct from '../components/add-product'
import ConnectStore from '../components/coonect-store'
import Review from '../components/review'
import MakeMoney from '../components/make-money'
import SocialIcon from '../components/socialIcon'
import Footer from '../components/footer'
import BottomBar from '../components/bottomBar'

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <AddProduct />
        <ConnectStore />
        <Review />
        <MakeMoney />
        <SocialIcon />
        <Footer />
        <BottomBar />
    </div>
  )
}

export default Home

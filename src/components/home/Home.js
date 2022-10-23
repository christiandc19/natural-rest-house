import React from 'react'
import './HomeStyles.css'
import './HomeSection'
import HomeSection from './HomeSection'

const Home = () => {
  return (
    <>
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <h1>Natural</h1>
                <h1>Rest House</h1>
                <div><button>Learn More</button></div>
            </div>
        </div>
    </div>

    <HomeSection/>

    </>
  )
}

export default Home

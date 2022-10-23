import React from 'react'
import Fade from 'react-reveal/Fade';
import './HomeStyles.css'
import './HomeSection'
import HomeSection from './HomeSection'

const Home = () => {
  return (
    <>
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <Fade top>
                <h1>Natural</h1>
                <h1>Rest House</h1>
                </Fade>
                <div><button>Learn More</button></div>
            </div>
        </div>
    </div>

    <HomeSection/>

    </>
  )
}

export default Home

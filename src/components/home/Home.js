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
                <h1>Natural Rest House</h1>
                </Fade>
                <Fade bottom>
                <h2>DETOX AND RESIDENTIAL CENTER</h2>
                <p>Reaching out is the first step. <br />
                You’re here because you care about someone who might be struggling with substance use.</p>
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

import React from 'react'
import './AnxietyStyles.css'
import Fade from 'react-reveal/Fade';


const Anxiety = () => {
  return (
    <>
    <div className='anxiety'>
        <div className='container'>
            <div className='content'>
                <Fade right>
                <h1>Anxiety</h1>
                </Fade>
                <Fade left>
                <h1>Disorder Treatment</h1>
                </Fade>
            </div>
        </div>
    </div>

{/* --------------------------------------------------> SECTION */}

    <div className='anxietySection'>
        <div className='anxietyContainer'>
            <div className='anxietyContent'>
                <h1>Anxiety</h1>
                <h1>Disorder Treatment</h1>
                <div><button>Learn More</button></div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Anxiety
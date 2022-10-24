import React from 'react'
import './ServicesCardsStyles.css'

function ServicesCards(props) {
  return (
        <div className="servicesCards">
            <img className='image' src= {props.Image} alt="logo" />
            <p className="card-name">{props.CardName}</p>
            <p className='card-desc'>{props.Description}</p>
            <button>Learn More</button>
        </div>
  )
}

export default ServicesCards;
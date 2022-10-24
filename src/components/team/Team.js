import React from 'react'
import './TeamStyles.css'

function Team (props) {
  return (

    <div className='team'>
        <div className='team-container'>
        <div className="content">
            <img className='image' src= {props.Image} alt="staff" />
            <p className="team-card-name">{props.CardName}</p><br/>
            <p className='team-card-description'>{props.Description}</p>
         </div>
         </div>
    </div>
  )
}

export default Team;
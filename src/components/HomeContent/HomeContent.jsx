import React from 'react'
import './HomeContent.css'
import me from '../images/img-1.jpg'

function HomeContent() {
  return (
    <div className="bgimage">
        <div className='homeContent'>
                <img className="portrait" src={me} alt='me'/>
            <div className='name'>
                    <h2>Marie Phillips</h2>
                    <br />
                    <p>Welcome to my portfolio website! Here, you can learn about the projects I have tackled and the industry experience I've gained. </p>
                </div>
            </div>
    </div>
    
  )
}

export default HomeContent
import React from 'react'
import profileImage from '../images/profile.jpg'


const About = () => {
  return (
    <div className='about-page'>
      <div className='about-image'>
        <img src = '/images/car.png' alt='Profile' />
      </div>
      <div className='about-details'>
        <h1>About Me</h1>
        <p>I am an entry level developer, just finished a full stack developer bootcamp with Rutgers University, where I found how much I enjoy coding. I am very creative, innovative, organized and LOVE coffee and nature.</p>
      </div>
    </div>
  )
}

export default About
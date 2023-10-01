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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio neque ipsam perspiciatis quam qui soluta iste commodi nam,
          veritatis deleniti, ad sequi laborum rerum eligendi tempora animi ipsa quae.</p>
      </div>
    </div>
  )
}

export default About
import React from 'react'


const Project =  ({ imageUrl, name, demo, code }) => {

  return (
    <div className='project'>
      <img src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt='' />
      <h3>{name}</h3>
      <div>
        <a href={demo} >Demo</a>
        <a href={code} >Code</a>
      </div>
    </div>
  )
}

export default Project
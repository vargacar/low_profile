import React from 'react'

const Project = ({imageUrl,name,demo,code}) => {
  return (
    <div className='project'>
      <img src={imageUrl} alt='' />
      <h3>{name}</h3>
      <div>
        <a href={demo} target='_blank'>Demo</a>
        <a href={code} target='_blank'>Code</a>
      </div>
    </div>
  )
}

export default Project
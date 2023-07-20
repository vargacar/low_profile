import React from 'react'
import Project from '../components/Project'
import projects from '../projects'

const Portfolio = () => {
  return (
    <div className='portfolio-page'>
      {projects.map(prj => {
        return <Project key={prj.name} imageUrl={prj.imageUrl} name={prj.name} code={prj.code} demo={prj.demo} />
      })}
    </div>
  )
}

export default Portfolio
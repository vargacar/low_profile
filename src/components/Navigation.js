import React from 'react'

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li
          onClick={()=>props.navigate('')}
          className={props.page === '' ? 'active' : ''}>About</li>
        <li
          onClick={()=>props.navigate('portfolio')}
          className={props.page === 'portfolio' ? 'active' : ''}>Portfolio</li>
        <li
          onClick={()=>props.navigate('contact')}
          className={props.page === 'contact' ? 'active' : ''}>Contact</li>
        <li
          onClick={()=>props.navigate('resume')}
          className={props.page === 'resume' ? 'active' : ''}>Resume</li>
      </ul>
    </nav>
  )
}

export default Navigation


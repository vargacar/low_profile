import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <header>
      <h1 className='animate__bounce'>Carolina Vargas</h1>
      <Navigation page={props.page} navigate={props.navigate} />
    </header>

  )
}

export default Header
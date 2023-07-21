import React from 'react'
import { useState } from 'react'


const Contact = () => {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState(false)

  const updateEmail = (e) => {
    setEmail(e.target.value)
    if (email.includes('@')) {
      setErr(false)
    } else {
      setErr(true)
    }
  }



  return (
    <div className='contact-page'>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." required />

        <label for="email">Email</label>
        <input
          onChange={updateEmail}
          type="email" id="email" name="email" placeholder="Your email.." required />
        <span>{err && 'Invalid Email address'}</span>
        <label for="message">Message</label>
        <textarea>Some text...</textarea>


        <input type="submit" value="Submit" />
      </form>
      {/* <h2>
        <a href='https://www.linkedin.com/' target='_blank'>LinkedIn</a>
        <a href='https://github.com/vargacar' target='_blank'>GitHub</a>
      </h2> */}
    </div>
  )
}

export default Contact
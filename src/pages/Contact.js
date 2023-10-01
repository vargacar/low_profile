import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import React from 'react'
import { useState } from 'react'


const Contact = () => {
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3jq6bd8', 'template_wzia3vg', form.current, '2atqYxHWsafT9RTPO')
      .then((result) => {
        console.log(result.text);
        console.log('message sent!');
        setSuccess ('message sent!');
        form.current.reset()
        console.log(form)
      }, (error) => {
        console.log(error.text);
        setErr ('message not sent, try again')
      });
  };
  // const [email, setEmail] = useState('')

  // const updateEmail = (e) => {
  //   setEmail(e.target.value)
  //   if (email.includes('@')) {
  //     setErr(false)
  //   } else {
  //     setErr(true)
  //   }
  // }



  return (
    <div className='contact-page'>
      {success&& <p>{success}</p>}
      {err&& <p>{err}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* <form>
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
      </form> */}
      {/* <h2>
        <a href='https://www.linkedin.com/' target='_blank'>LinkedIn</a>
        <a href='https://github.com/vargacar' target='_blank'>GitHub</a>
      </h2> */}
    </div>
  )
}

export default Contact
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from "react"; 

const Contact = () => {

  const form = useRef();
  const [done, setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o93yu49', 'template_st13ajh', form.current, 'l5gQm0N3_fUpsSzoG')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Got a project you would like me to work on?<br/>
Or how about just a friendly chat?</span>
                <div
                className='blur s-blur' 
                style={{background:"ABF1FF94"}}>

                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='username' className='user' placeholder='Name'/>
                <input type='email' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Thanks for contacting me"}</span>
                <div className='blur c-blur' style={{background: "var(--purple)"}}></div>
                <div className="blur" style={{
          background:'#C1F5FF',
          top:'20rem',
          width:'21rem',
          height:'9rem',
          left:'30rem'


        }}></div>
            </form>
        </div>
    </div>

  )
}

export default Contact
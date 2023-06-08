import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
   <div className="footer">
    
    <img src={Wave} alt='' style={{width:'100%'}}/>
    <span>mayuri160106@gmail.com</span>
    <span>© Mayuri Agrawal</span>
   </div>
  )
}

export default Footer
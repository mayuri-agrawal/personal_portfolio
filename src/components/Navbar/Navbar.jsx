import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Timeline from '../Timeline/Timeline'

const Navbar = () => {
  return (
<div className="n-wrapper">
    <div className="n-left">
        <div className='n-name'>Mayuri</div>
        
    </div>
<div className="n-right">
    <div className="n-list">
        <ul style={{listStyleType:'none'}}>

          <Link spy={true} to="Home" smooth={true} >
          <li>Home</li>
          </Link>

           <Link spy={true} to="Skills" smooth={true}>
          <li>About me</li>
          </Link>
      
            <Link spy={true} to="Projects" smooth={true} >
          <li>Projects</li>
          </Link>
          <Link spy={true} to="Timeline" smooth={true}>
          <li>Timeline</li>
          </Link>

           </ul>   
    </div>

   <Link spy={true} to="Contact" smooth={true}>
    <button className="button n-button">Contact me</button></Link>
   
    
   
</div>

   </div>
  )
}

export default Navbar
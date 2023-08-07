import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Leetcode from '../../img/leetcode.png';
import girl from '../../img/intro-grl.png';
import resume from '../../img/resume.pdf';
import {motion} from 'framer-motion'
import {useId} from 'react';



const Intro = () => {
 const transition ={duration:2, typeof:'spring'}
  return (
    <div className='intro' id='Home'>
        <div className='i-left'>
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Mayuri Agrawal</span>
            <span>Frontend Developer and Data Science Enthusiast</span>
        </div>
             <a
             href={resume} download="Resume" target='_blank'>
   <button className='button i-button'>Download Resume</button>
</a>
        <div className="i-icons">
         <a href='https://github.com/mayuri-agrawal'  target="_blank"><img src={Github} alt=""/></a> 
          <a href='https://www.linkedin.com/in/mayuri-agrawal/' target='_blank'><img src={LinkedIn} alt=""/></a>
          <a href='https://leetcode.com/mayuri1601/' target='_blank'><img src={Leetcode} alt=""/></a>

        </div>
             
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{
          background:'#C1F5FF',
          top:'12rem',
          width:'21rem',
          height:'5rem',
          left:'45rem'


        }}></div>
             <div className="i-right">
             < motion.img
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1.5}}
            transition={{delay:0.5,duration:2,ease:[0,0.71,0.2,1.01]}}
              src={girl} alt=""/>
             </div>
        </div>
    </div>
  )
}

export default Intro
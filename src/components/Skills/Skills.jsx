import React from 'react'
import "./Skills.css"
import photo from '../../img/dev.png';
import {motion} from 'framer-motion';

const transition ={duration:2, type:'spring'}
const Skills = () => {
  return (
    <div className="skills" id='Skills'>
        <div className='sleft'>
            <div className="pic">
            <motion.img
             initial={{left:'-36%'}}
             whileInView={{left:'-24%'}}
             transition={transition}
            src={photo} alt=""/>
            </div>
            <motion.div
              initial={{opacity:0,scale:0.4}}
              whileInView={{opacity:1,scale:1.1}}
              animate={{opacity:0.5,scale:0.5}}
              transition={{delay:0.5,duration:1.5,ease:[0,0.71,0.2,1.01]}}
            
            className="desc">
            I'm a tech-enthusiast, adaptable team player with strong communication and problem-solving skills pursuing my Bachelors at Madhav Institute of Technology and Science, Gwalior. 
            </motion.div>
       
        </div>
        <div className="sright">
        {/* <div className="s1box">

        </div> */}
        <div className="s2box">
            <span>Skills</span>
            <span className='head'>Programming Language</span>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
              
            </ul>
            <span className='head'>Subject Knowledge</span>
            <ul>
              <li>OOPS</li>
              <li>DBMS</li>
              <li>Data Structures and Algorithms</li>
              <li>Operating System</li>
            </ul>

            <span className='head'>Domain Knowledge</span>
            <ul>
            <li>Machine Learning</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              
            </ul>
       
        </div>
        </div>
    </div>
  )
}

export default Skills
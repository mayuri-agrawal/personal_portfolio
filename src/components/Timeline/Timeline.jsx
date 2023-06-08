import React from 'react'
import {motion} from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  const transition ={duration:2, typeof:'spring'}
  return (
    <div className="timeline" id='Timeline'>
      <span>My Timeline</span>
      <div className="timeline-container">
        <div className="vertical-line"></div>
      <div className="container left">
        <div className="content">
        <span>2005-2020</span>
        <span>Completed my schooling from Sophia Convent Senior Secondary
        </span>
        </div>
        
      </div>
        <div className="container right">
          <div className="content">
          <span>2020-till date</span>
        <span>Pursuing Btech in the branch Artificial Intelligence and Robotics from Madhav Institute of Technology and Science, Gwalior
        </span>
     
          </div>
          
        </div>
        <div className="container left"><div className="content">
        <span>2021-till date</span>
        <span>Started Competitive Programmnig and learning concepts of Data Structures and Algorithms.
          Completed 100+ question on Leetcode.
        </span>
      
          </div></div>
        <div className="container right">
          <div className="content">
          <span>2022-till date</span>
        <span>
        Started improving my Skills by performing Machine Learning and Web Development.
          I've worked on numerous projects involving these technologies.
        </span>
      
          </div>
          </div>
          <div className="container left"><div className="content">
        <span>2022(October Month)</span>
        <span>Open Source Contribution-
        Successfully Completed 4 open-source contribution on Github.
        </span>
      
          </div></div>
          <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
          <div className="blur" style={{
          background:'#C1F5FF',
          top:'20rem',
          width:'21rem',
          height:'5rem',
          left:'15rem'


        }}></div>
      </div>
      
    </div>
  )
}

export default Timeline
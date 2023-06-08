import React from 'react'
import "./Projects.css"
// import Swiper from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import ImageCaption from "../../img/imagecaption.png";
import Sentiment from "../../img/sentiment analysis.jpg";
import Calci from "../../img/calci.svg";
import Form from "../../img/Form.jpg";
import 'swiper/css'

const Projects = () => {
  return (
    <div className="projects" id='Projects'>
        
        <span>My Projects</span>
        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className='projects-slider'
        >

            <SwiperSlide>
                <a href='https://github.com/mayuri-agrawal/Image-Caption-Generator' target='__blank'><img src={ImageCaption} alt=""/></a>
                
                <div className='text'> <span>Image Caption Generator</span>
                    <span>Created a machine learning project that uses CNN to extract picture attributes from Xception and LSTM to generate
image captions.</span></div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="projects-img">
                <a href='https://github.com/mayuri-agrawal/IPL_2022_tweets_sentiment_analysis' target='__blank'>
                    <img src={Sentiment} alt=""/>
                    </a>
                <div className='text'>
                <span>Sentiment Analyzer</span>
                    <span>Built a Sentiment Analyzer of IPL-2022 Twitter dataset using Vader Sentiment Analyzer. It uses nltk library for the
generation of stopwords and preparing wordcloud
</span>
                </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/mayuri-agrawal/interest-calculator' target='__blank'>
                <img src={Calci} alt=""/>
                </a>
               
                <div className='text'><span>Interest Calculator</span>
                    <span>Created a Simple and Compund Interest Calculator using Javascript </span></div>
            </SwiperSlide>
            <SwiperSlide>

                <a href='https://github.com/mayuri-agrawal/form-php' target='__blank'>
                <img src={Form} alt=""/>
                </a>
                
                <div className='text'>
                    <span>PHP Login Form</span>
                    <span>Login form using PHP</span>
                </div>
            </SwiperSlide>
            <div className='swiper-pagination'></div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
        </Swiper>
    </div>
  )
}

export default Projects
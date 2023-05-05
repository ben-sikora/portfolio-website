import React from 'react'
import arrow from "../assets/vector.svg"
import travel from "../assets/travel.jpg"
import './About.css'
import portrait from "../assets/portrait.jpeg"
import { motion } from "framer-motion"

//Look into npm scrollreveal

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y:-75, x:-10}}
    whileInView={{ opacity: 1, y:0, x:0}}
    viewport={{ once: true }}
    transition={{ delay: 0.75, duration: 1}}
    className='flex flex-row h-[100vh] items-center justify-between'>


        {/* About me section*/}
        <div className="box-border w-[570px] flex flex-col items-center" id='about-page'>
            <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> About Me</h2>
            <div className='bg-darkblue w-[570px] px-[1.75rem] py-[1.2rem]'>
                <p className='text-display text-[18px] font-[400] text-white mb-5'>
                Hello! My name is Ben.
                I am a recent graduate from Georgetown University looking to start my career in Software Development. I created this website to illustrate some of my recent projects and also to share a little bit about me. 
                <br/>
                <br />
                During school, my main focus was on 
                <span className='text-yellow font-bold'> data science</span>. 
                I spent a year as the head analyst at the world's largest 
                <span className='text-yellow font-bold'> student-run non-profit</span>  and spent time learning and building various machine learning and AI models. More recently, I have shifted my focus to 
                <span className='text-yellow font-bold'> web apps and cloud technology. </span> 
                I am working towards completing my AWS cloud certification and have deployed my first Full-Stack apps. 
                <br/>
                <br />
                I graduated from school in May 2022 and am currently based in Seattle, WA. Curious what I have been up to in the past year? Check out my blog! 
                </p>
                <div className=''>
                <h4 className='text-display text-[18px] font-[400] text-white mb-4'>Some technologies I've used recently...</h4> 
                <ul className="box-border pl-10 grid text-[18px] text-white  grid-cols-3 gap-x-20">
                  <li>React</li>
                  <li>AWS</li>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>C++</li>
                </ul>
                </div>
            </div>
        </div>

        {/*Picture Section
        <div className=''>
          <img src={portrait} className='w-[400px]'/>
  </div>*/}
        <div className='w-[650px] flex flex-col items-center mt-10'>
        <div className="w-[475px] grid grid-rows-1 grid-cols-1 box-border justify-self-center">
            <div className="w-[475px] h-[460px] z-0 row-start-1 row-end-2 col-start-1 col-end-2 bg-black mt-4 ml-4">
            </div>
            <img
                    src={portrait}
                    alt="portrait of ben"
                    className="w-[450px] object-contain z-0 row-start-1 row-end-2 col-start-1 col-end-2"
            />  
        </div>
        {/*        <h4 className='text-display text-[24px] font-[500] leading-8 text-darkblue ml-10'>"Curiosity is at the center of my path to learning, and with every new challenge comes the opportunity to gain a deeper understanding of new ideas and create something that truly stands out.”</h4>*/}
        </div>
    </motion.div>
  )
}

export default About;
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
    className='flex flex-col md:flex-row justify-center items-center md:justify-between'>


        {/* About me section*/}
        <div className="box-border flex flex-col items-center" id='about-page'>
            <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> About Me</h2>
            <div className='m-[20px]'>
            <img
                    src={portrait}
                    alt="portrait of ben"
                    className="w-[300px] md:w-[450px] object-contain shadow-blackBox mx-auto"
            /> 
            </div>
            
        </div>

        {/*Picture Section
        <div className=''>
          <img src={portrait} className='w-[400px]'/>
  </div>*/}
        <div className='md:mt-[6rem] mt-4 ml-4 flex-grow' >
        <div className='bg-darkblue max-w-[570px] px-[1.75rem] py-[1.2rem] rounded-lg shadow-lg mx-auto'>
                <p className='text-display text-[14px] lg:text-[18px] text-white mb-5'>
                Hello! My name is Ben. It's nice to meet you!
                I am a recent Computer Science graduate from Georgetown University looking to start my career in Software Development. I created this website to illustrate some of my recent projects and also to share a little bit about me. 
                <br/>
                <br />
                During school, my main focus was on 
                <span className='text-yellow font-bold'> data science</span>. 
                I spent a year as the head analyst at the world's largest 
                <span className='text-yellow font-bold'> student-run non-profit</span>  and spent time learning and building various ML models. More recently, I have shifted my focus to 
                <span className='text-yellow font-bold'> web apps and cloud technology. </span> 
                I am working towards completing my AWS cloud certification and have deployed my first Full-Stack apps. 
                <br/>
                <br />
                Curious what I have been up to in the past year? Check out my blog! 
                </p>
                <div className=''>
                <h4 className='text-display text-[14px] lg:text-[18px]  text-white mb-4'>Some technologies I've used recently...</h4> 
                <ul className="box-border pl-10 grid text-[14px] lg:text-[18px]  text-white  grid-cols-3 gap-x-3">
                  <li>React</li>
                  <li>AWS</li>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>C++</li>
                </ul>
                </div>
            </div>
        {/*}<h4 className='text-display text-[24px] font-[500] leading-10 ml-10 mt-2'>"Curiosity is at the center of all that I do. I believe that each new challenge has the potential to expand my understanding of myself and the world around me.”</h4>*/}
        </div>
    </motion.div>
  )
}

export default About;
import React from 'react'
import arrow from "../assets/vector.svg"
import travel from "../assets/travel.jpg"
import { motion } from "framer-motion"

//Look into npm scrollreveal

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y:-75, x:-10}}
    whileInView={{ opacity: 1, y:0, x:0}}
    viewport={{ once: true }}
    transition={{ delay: 0.75, duration: 1}}
    className='flex flex-row mt-10 items-center justify-between'>


        {/* About me section*/}
        <div className="box-border w-[570px] flex flex-col items-center" id='about-page'>
            <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> About Me</h2>
            <div className='bg-darkblue w-[450px] h-[4--px] p-[2.25rem]'>
                <p className='text-display text-[18px] leading-13 font-[400] text-white mb-10'>
                Hello! My name is Ben. I like learning and building cool things. 
                <br/>
                I graduated from Georgetown University in 2022. During school, my main focus was on data science. I spent a year as the head analyst of the world’s largest student-run non-profit and built many machine learning and AI algorithms from scratch. 
                <br/>
                More recently, however, I have shifted my focus on web apps and cloud technologies. I am working towards completing my AWS cloud certification and have deployed my first Full-Stack apps. 
                <br/>
                As a lifelong learner, curiosity has always been at the center of my personality. With each new line of code, bug, or project, I build a new understanding of what I want to create and how I want to build it. I am a driven, passionate, and clever engineer that is always looking to build the next great thing. 

                </p>
                <div className=''>
                <ul className="box-border pl-10 grid text-[24px] font-[600] text-white list-image-[url(assets/vector.svg)] grid-cols-2 gap-x-20">
                  <li>Java</li>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>C++</li>
                </ul>
                </div>
            </div>
        </div>

        {/*Picture Section*/}
        <div className=''>
          <img src={travel} className='mt-14'/>
        </div>
    </motion.div>
  )
}

export default About;
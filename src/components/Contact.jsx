import React, { useState } from 'react';
import paintbrushLightBlue from "../assets/paintbrushLightblueL.svg";
import { motion } from "framer-motion"

const Contact = () => {

    return (
      <motion.div 
      initial={{ opacity: 0, y:-75, x:-10}}
      whileInView={{ opacity: 1, y:0, x:0}}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8}}>
    <div className="flex flex-col items-center mb-4" id='contact-page'>
        <div className="grid grid-rows-1 grid-cols-1 box-border">
            <img src={paintbrushLightBlue} className='h-auto w-full max-w-[380px] min-w-[320px] sm:max-w-none sm:w-[70%] md:w-[80%] lg:w-[85%] z-0 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto'/>
            <h1 className="font-writing font-normal text-white text-[2.4rem] md:text-[2.9rem] lg:text-[3.5rem]  z-10 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto mt-2">Get in Touch!</h1>
        </div>
        <p className='text-[1.4rem] md:text-[1.8rem]  font-[800] leading-[50px] lg:leading-[60px] text-darkgreen text-center sm:text-left'>I am always open to connect!</p>
        <p className='text-[1.4rem] md:text-[1.8rem]  font-[800] leading-[50px] lg:leading-[60px] text-darkgreen text-center '>I am currently searching for new oppurtunites.</p>
        <div className='flex flex-col sm:flex-row text-[1.2rem] md:text-[1.5rem]  font-[800] leading-[50px] lg:leading-[60px] text-darkgreen text-center'>
            <p >bssikora@gmail.com</p>
            <p className='sm:ml-3'>www.linkedin.com/ben-sikora/</p>
        </div>
      </div>
      </motion.div>
    )
  }
  
  export default Contact
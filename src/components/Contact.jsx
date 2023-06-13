import React, { useState } from 'react';
import { motion } from "framer-motion"

const Contact = () => {

    return (
      <motion.div 
      initial={{ opacity: 0, y:-75, x:-10}}
      whileInView={{ opacity: 1, y:0, x:0}}
      viewport={{ once: true }}
      transition={{ delay: 0.75, duration: 1}}>
    <div className="flex flex-col items-center mb-4" id='contact-page'>
        <h2 className='text-display text-[40px] text-darkgreen font-[800] flex justify-center'> Get in Touch</h2>
        <p>I am always open to connect!</p>
        <p>I am currently searching for new oppurtunites.</p>
        <div className='flex flex-row'>
            <p>bssikora@gmail.com</p>
            <p className='ml-3'>www.linkedin.com/ben-sikora/</p>
        </div>
      </div>
      </motion.div>
    )
  }
  
  export default Contact
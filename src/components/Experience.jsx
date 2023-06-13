import React, { useState } from 'react';
import { motion } from "framer-motion"

const Experience = () => {
    const buttonOnStyling= "bg-lightblue"
    const [citiClassName, setCitiClassName]= useState(buttonOnStyling)
    const [corpClassName, setCorpClassName]= useState("")

    
    const citiContent=
    <div> 
    <h3 className='text-white text-[1.2rem] sm:text-[1.5rem]'> Software Engineer Intern <span className='text-yellow font-writing
     text-[1.2rem] sm:text-[1.5rem]'>@Citibank </span> </h3>
    <h4 className='font-light mb-3 text-[0.9rem] sm:text-[1rem]'>Aug 2022-Sept 2022</h4>
    <p className='text-[0.9rem] sm:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    const corpContent=
    <div> 
    <h3 className='text-white text-[1.2rem] sm:text-[1.5rem]'> Director of Data Analytics <span className='text-yellow font-writing
     text-[1.2rem] sm:text-[1.5rem]'>@The Corp </span> </h3>
    <h4 className='font-light mb-3 text-[0.9rem] sm:text-[1rem]'>Apr 2021-April 2022</h4>
    <p className='text-[0.9rem] sm:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    const [content, setContent]= useState(citiContent)

    const switchButton= () =>{
        if(citiClassName === ''){
            setCitiClassName(buttonOnStyling)
            setContent(citiContent)
            setCorpClassName("")
        } else{
            setCitiClassName("")
            setContent(corpContent)
            setCorpClassName(buttonOnStyling)
        }

    }

    return (
      <motion.div 
      initial={{ opacity: 0, y:-75, x:-10}}
      whileInView={{ opacity: 1, y:0, x:0}}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8}}>
      
    <div className="w-[60%] min-w-[300px] mx-auto mt-10" id='experience-page'>
    <h2 className='text-display text-[2.4rem] md:text-[2.9rem] lg:text-[3.5rem] font-[800] text-darkgreen flex justify-center'> Experience</h2>
    <div className="box-border py-4 mt-8 bg-darkblue">
      <div className="box-border flex">
        <div className="basis-1/5">
        <ul className='mt-4'>
            <li className={`box-border cursor-pointer text-white pl-[1ch] w-[10ch] ${citiClassName}`} onClick={switchButton} >Citibank</li>
            <li className={`cursor-pointer text-white pl-[1ch] w-[10ch] mt-2 ${corpClassName}`} onClick={switchButton}>The Corp</li>
        </ul>
        </div>
        <div className="ml-4 pr-1 basis-4/5 text-white">
           {content}
        </div>

      </div>
      </div>
      <div className='flex justify-center'>
      <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          href="#"
        >Resume</button>
        </div>
      </div>
     </motion.div>
    )
  }
  
  export default Experience
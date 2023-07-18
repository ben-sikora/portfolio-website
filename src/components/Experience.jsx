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
    <p className='text-[0.9rem] sm:text-[1rem]'>Selected as part of the CUPID Arrow Program for Summmer 2022. Worked with Developer Services, a part of the Global Functions Technology Engineering and Architecture Division.
    <br/>
    <br/>
    •	Built a JSON to YAML converter in Python with functional Tkinter GUI and FastAPI integrations.<br/>
    •	 Learned Docker and OpenShift to deploy the API onto Citi’s servers. <br/>
    •	Modernized a CI/CD cloud pipeline by moving and modularizing the 2,000-line Jenkins script into a git repository.  <br/>
</p>
    </div>

    const corpContent=
    <div> 
    <h3 className='text-white text-[1.2rem] sm:text-[1.5rem]'> Director of Data Analytics <span className='text-yellow font-writing
     text-[1.2rem] sm:text-[1.5rem]'>@The Corp </span> </h3>
    <h4 className='font-light mb-3 text-[0.9rem] sm:text-[1rem]'>Apr 2021-April 2022</h4>
    <p className='text-[0.9rem] sm:text-[1rem]'>The Students of Georgetown Inc, otherwise known as The Corp, is the largest student-run non-profit in the world. With over 300 employees, 6 storefronts, and 3 internal services, The Corp generates around $4 million in yearly revenue. 
    <br/>
    <br/>
    •	Led a team of six analysts to provide specialized weekly and quarterly reports of store trends and products to managers.  
    <br/>
    •	Saved an estimated $20K by correcting mismatched prices and purchasing miscommunications through a standardized product and spoilage system for our Coffee and Convenience services.
    <br/>
    •	Presided over the research and implementation of a $15k companywide rewards program by analyzing customer habits and preferences. The program had over 1,000 sign-ups in its first week, with overwhelmingly positive customer feedback.  
    <br/>
    </p>
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
      
    <div className="w-[60%] min-w-[300px] mx-auto mt-3" id='experience-page'>
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
      <a href="https://drive.google.com/file/d/1qtazQtQ6nzLnv-jXb1pWb4ooWvNQL8TO/view"
          target="_blank" 
          rel="noopener noreferrer">
      <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        >Resume</button>
        </a>
        </div>
      </div>
     </motion.div>
    )
  }
  
  export default Experience
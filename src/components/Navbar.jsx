import React, { useState } from 'react';
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
import Styles from "../style.js"
import GithubComp from "../assets/GithubComp.jsx"
import LinkedinComp from "../assets/LinkedinComp.jsx"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const buttonAnimation='transform hover:-translate-y-1 hover:text-darkblue hover:scale-105 ease-in-out delay-70 duration-300' 

  return (
    <div className="">
      <div className="flex mt-5">
          <div className='flex grow-[1] ml-8 md:hidden'>
            <img src={toggle ? close: menu} 
            className='w-[35px] transform -scale-x-100'
            onClick={()=> setToggle((prev) => !prev)}/>
          </div>
          <a href="#hero-page" className= {`hidden md:flex justify-center items-center font-display text-[1.3rem] grow-[1] basis-1/5 ${Styles.buttonAnnimation}`} > @bensikora </a>
          <ul className= 
          "hidden md:flex justify-center items-center text-[1.3rem] font-display grow-[3] basis-3/5">
              <li className={`pr-4 l:pr-7 ${Styles.buttonAnnimation}`}><a href="#about-page">About</a></li> 
              <li className={`px-4 l:px-7 ${Styles.buttonAnnimation}`}><a href="#projects-page">Projects</a></li>
              <li className={`px-4 l:px-7 ${Styles.buttonAnnimation}`}><a href="#experience-page">Experience</a></li>
              <li className={`px-4 l:pl-7 ${Styles.buttonAnnimation}`}><a href="#">Blog</a></li>
    
          </ul>
          <div className="flex grow-[1] justify-end mr-8 shrink-0 basis-1/5 md:justify-center md:mr-0">
            
            <div className='flex items-end mb-[0.10rem]'>
              <GithubComp />
            </div>
            <div className='flex items-end'>
            <LinkedinComp />
            </div>
          </div>
      </div>
      <hr className="border-t-1 border-black mx-10" />
      <div className={`${toggle ? 'flex': 'hidden'} justify-start md:hidden`}>
            <ul className= 
          "flex flex-col justify-center text-[1.3rem] font-display mt-4">
              <li className={`${Styles.buttonAnnimation}`}><a href="#about-page">About</a></li> 
              <li className={`${Styles.buttonAnnimation}`}><a href="#projects-page">Projects</a></li>
              <li className={`${Styles.buttonAnnimation}`}><a href="#experience-page">Experience</a></li>
              <li className={`${Styles.buttonAnnimation}`}><a href="#">Blog</a></li>
    
          </ul>

      </div>
    </div>
  )
}

export default Navbar
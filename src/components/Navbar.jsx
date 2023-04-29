import React from 'react'
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
import Styles from "../style.js"
import GithubComp from "../assets/GithubComp.jsx"
import LinkedinComp from "../assets/LinkedinComp.jsx"

const Navbar = () => {

  const buttonAnimation='transform hover:-translate-y-1 hover:text-darkblue hover:scale-105 ease-in-out delay-70 duration-300' 

  return (
    <div className="">
      <div className="flex mt-5">
          <a href="#hero-page" className= {`flex justify-center items-center font-display text-[1.3rem] grow-[1] basis-1/5 ${Styles.buttonAnnimation}`} > @bensikora </a>
          <ul className= 
          "flex justify-center items-center text-[1.3rem] font-display grow-[3] basis-3/5">
              <li className={`px-7 ${Styles.buttonAnnimation}`}><a href="#about-page">About</a></li> 
              <li className={`px-7 ${Styles.buttonAnnimation}`}><a href="#projects-page">Projects</a></li>
              <li className={`px-7 ${Styles.buttonAnnimation}`}><a href="#experience-page">Experience</a></li>
              <li className={`px-7 ${Styles.buttonAnnimation}`}><a href="#">Blog</a></li>
    
          </ul>
          <div className="flex grow-[1] justify-center shrink-0 basis-1/5">
            <GithubComp />
            <LinkedinComp />
          </div>
      </div>
      <hr className="border-t-1 border-black mx-10" />
    </div>
  )
}

export default Navbar
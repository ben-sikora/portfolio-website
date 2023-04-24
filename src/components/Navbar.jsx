import React from 'react'
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
const Navbar = () => {
  return (
    <div className="w-full xl:w-[1280px]">
      <div className="flex w-full xl:w-[1280px] mt-5">
          <a href="#" className= "flex justify-center items-center font-display font-lightb grow-[1] basis-1/5" > @bensikora </a>
          <ul className= 
          "justify-center inline-flex items-center text-lg font-display font-light grow-[3] basis-3/5">
              <li className='px-7'><a href="#">About</a></li> 
              <li className='px-7'><a href="#">Experience</a></li>
              <li className='px-7'><a href="#">Blog</a></li>
              <li className='px-7'><a href="#">Resume</a></li>
          </ul>
          <div className="flex grow-[1]justify-center shrink-0 basis-1/5">
            <img src= {githubLogo} className= "w-[25px] h-[25px] mr-3"/>
            <img src={linkedinLogo} className= "w-[25px] h-[25px]"/>
          </div>
      </div>
      <hr className="border-t-10 border-black mx-10" />
    </div>
  )
}

export default Navbar
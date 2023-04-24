import React from 'react'
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
const Navbar = () => {
  return (
    <div className="">
      <div className="flex mt-5">
          <a href="#" className= "flex justify-center items-center font-display text-[1.3rem] grow-[1] basis-1/5" > @bensikora </a>
          <ul className= 
          "flex justify-center items-center text-[1.3rem] font-display grow-[3] basis-3/5">
              <li className='px-7'><a href="#">About</a></li> 
              <li className='px-7'><a href="#">Projects</a></li>
              <li className='px-7'><a href="#">Experience</a></li>
              <li className='px-7'><a href="#">Blog</a></li>
    
          </ul>
          <div className="flex grow-[1] justify-center shrink-0 basis-1/5">
            <img src= {githubLogo} className= "w-[35px] h-[35px] mr-3"/>
            <img src={linkedinLogo} className= "w-[35px] h-[35px]"/>
          </div>
      </div>
      <hr className="border-t-1 border-black mx-10" />
    </div>
  )
}

export default Navbar
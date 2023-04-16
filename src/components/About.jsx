import React from 'react'
import arrow from "../assets/vector.svg"
import travel from "../assets/travel.jpg"
const About = () => {
  return (
    <div className='flex flex-row mt-10 items-center justify-between'>


        {/* About me section*/}
        <div className="box-border w-[570px] flex flex-col items-center">
            <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> About Me</h2>
            <div className='bg-darkblue w-[450px] h-[4--px] p-[4.25rem]'>
                <p className='text-display text-[24px] leading-13 font-[600] text-white mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
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
    </div>
  )
}

export default About;
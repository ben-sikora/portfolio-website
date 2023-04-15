import React from 'react'
const About = () => {
  return (
    <div className='flex flex-row mt-10'>
        <div className="w-[570px] flex flex-col items-center">
            <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> About Me</h2>
            <div className='bg-darkblue w-[570px] h-[600px] p-[4.25rem]'>
                <p className='text-display text-[32px] leading-13 font-[600] text-white '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>

        </div>
    </div>
  )
}

export default About;
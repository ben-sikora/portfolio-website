import React from 'react'
import hiking from "../assets/hiking.jpg"
import portrait from "../assets/portrait.jpeg"
import paintbrushLightBlue from "../assets/paintbrushLightblue.svg"
import paintbrushDarkblue from "../assets/paintbrushDarkblue.svg"

const Hero = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[420px] mt-4 ml-8 shrink-0'>
      {/*Writing on Top*/}
        <div className=''>
          <div className='relative'>
          <img src={paintbrushLightBlue} className='ml-9'/>
          <h1 className="font-writing font-normal text-white text-3xl absolute top-3 left-[5rem]">Hi  my name is</h1>
          </div>
        
          <div className='mt-4 relative'>
            <img src={paintbrushDarkblue} className='ml-auto'/>
            <h1 className="font-writing font-normal text-white text-5xl top-7 left-[6rem] absolute">Ben Sikora</h1>
          </div>
        </div>
  

      {/*Pictures*/}
      <div className="w-[383px] h-[530px] bg-red-300 relative mt-4">
        <div className="w-[363px] h-[513px] bg-black absolute bottom-0 right-0">
        </div>
        <img src={hiking} alt="portrait of ben" className="w-[328px] h-[501px] object-contain absolute top-0 left-0"/> 
      </div>
    </div>

    {/* Text*/}
    
      <div className='w-[630px] flex-shrink m-auto'>
      <h1 className='text-[64px] font-[800] leading-[73px] text-darkgreen'>I like <span className='text-lightblue'>learning</span> and
      <br/><span className='text-darkblue'>building</span> cool things</h1>
      <p className='text-[32px] font-[4000] leading-[44px] text-black'>
      I am a computer scientist passionate about Full-Stack Development, Cloud Engineering, and all things creating. 
      </p>
      </div>
    </div>
  )
}

export default Hero
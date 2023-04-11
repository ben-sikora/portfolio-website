import React from 'react'
import hiking from "../assets/hiking.jpg"
import paintbrushLightBlue from "../assets/paintbrushLightblue.svg"
import paintbrushDarkblue from "../assets/paintbrushDarkblue.svg"

const Hero = () => {
  return (
    <div>
      <img src={paintbrushLightBlue}/>
      <img src={paintbrushDarkblue}/>
    <div className="w-[383px] h-[530px] bg-red-300 relative">
      <div className="w-[363px] h-[513px] bg-black absolute bottom-0 right-0">
      </div>
      <img src={hiking} alt="portrait of ben" className="w-[328px] h-[501px] object-contain absolute top-0 left-0"/> 
    </div>
    </div>
  )
}

export default Hero
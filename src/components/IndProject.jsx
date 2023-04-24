import React from 'react'
import projectPic from "../assets/clarifai.jpeg"

const IndProject = () => {
  return (
    <div className='flex flex-row w-[500px] justify-between'>
        {/*Pictures */}
        <div className='grid w-[270px] grid-cols-6 h-[160px] grid-rows-4 mr-3'>
            <div className='bg-darkblue row-start-2 row-end-4 col-end-7 col-start-1 z-0'>
            </div>
            <div className='col-start-2 col-end-6 row-start-1 row-end-5 z-10 object-contain flex justify-center border-black border-2'>
                <img className='' src={projectPic} >
                </img>
            </div>
        </div>
        {/*Text */}
        <div className='bg-lightblue h-[150px] w-[300px] flex justify-center items-center object-contain'>
            <p className='text-display text-[16px] leading-13 font-[600] text-white mx-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
    </div>

  )
}

export default IndProject
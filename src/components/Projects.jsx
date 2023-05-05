import React from 'react'
import IndProject from './IndProject'
import FaceRecApp from "../assets/FaceRecApp.png"

const Projects = () => {
  /*hover:brightness-50*/
  return (
    <div className="h-[100vh]" id='projects-page'>
        <div className='flex flex-col items-center'>
        <div className='bg-black flex flex-row h-[400px] w-[100%]'>
          <div className='w-[600px]'>
            <div className='transition-all duration-300 cursor-pointer filter  hover:grayscale-[0.5]'>
            <a href='#'>
            <img src={FaceRecApp} className='w-[100%]'>
            </img>
            </a>
            </div>
          </div>

            <div className='bg-lightblue h-[250px] w-[300px] flex justify-center'>
              <p></p>


            </div>
        </div>
        <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6'> Projects</h2>
        <div className='grid grid-cols-2 grid-row-2 h-[80%] justify-items-center items-center'>
            <IndProject />
            <IndProject />
            <IndProject />
            <IndProject />
        </div>
        </div>

    </div>
  )
}

export default Projects
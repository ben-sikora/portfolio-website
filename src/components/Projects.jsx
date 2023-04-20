import React from 'react'
import IndProject from './IndProject'

const Projects = () => {
  return (
    <div className="w-100% h-[100vh] bg-slate-400">
        <h2 className='text-display text-[64px] font-[800] text-darkgreen mb-6 flex justify-center'> Projects</h2>
        <div className='grid grid-cols-2 grid-row-2 h-[80%] justify-items-center items-center'>
            <IndProject />
            <IndProject />
            <IndProject />
            <IndProject />
        </div>

    </div>
  )
}

export default Projects
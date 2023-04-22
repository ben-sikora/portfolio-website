import React, { useState } from 'react';

const Experience = () => {
    const buttonOnStyling= "bg-lightblue"
    const [citiClassName, setCitiClassName]= useState(buttonOnStyling)
    const [corpClassName, setCorpClassName]= useState("")

    const switchButton= () =>{
        if(citiClassName == ''){
            setCitiClassName(buttonOnStyling)
            setCorpClassName("")
        } else{
            setCitiClassName("")
            setCorpClassName(buttonOnStyling)
        }

    }

    return (
    <div className="w-[80%] mx-auto">
    <h2 className='text-display text-[64px] font-[800] text-darkgreen flex justify-center'> Experience</h2>
    <div className="box-border pt-10 bg-darkblue">
      <div className="box-border flex">
        <div className="basis-1/5">
        <ul>
            <li className={`box-border cursor-pointer text-white pl-[1ch] w-[8ch] ${citiClassName}`} onClick={switchButton} >Citibank</li>
            <li className={`cursor-pointer text-white pl-[1ch] w-[8ch] ${corpClassName}`} onClick={switchButton}>The Corp</li>
        </ul>
        </div>
        <div className="basis-4/5 text-white">
            <div> 
                <h3>Citibank</h3>
                <h4>Aug 2022-Sept 2022</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

      </div>
      </div>
      </div>
    )
  }
  
  export default Experience
import React from "react";
import { useState } from "react";

const BigProject = (props) => {
  const [grayScale, setGrayScale] = useState("");

  const logoLists= props.logos.map((logo)=>{
    return <img className="hidden sm:block sm:w-[35px] md:w-[45px]" src={logo}/>
  });
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <div
      className="flex flex-col sm:flex-row h-[300px] w-[100%] justify-center items-center transition-all duration-200 hover:scale-[102%] cursor-pointer box-border"
      onMouseEnter={() => setGrayScale("grayscale-[0]")}
      onMouseLeave={() => setGrayScale("grayscale-[0.5]")}
    >
      <div className="w-[500px] flex justify-center sm:block">
        <div
          className={`transition-all duration-200 cursor-pointer filter   mr-4 grayscale-[0.5] ${grayScale}`}
        >
         
            <img src={props.img} className="w-[300px] sm:w-[100%]"></img>
          
        </div>
      </div>

      <div className="self-center bg-lightblue w-[350px] mt-3 sm:mt-0 sm:w-[500px]  sm:h-[200px] text-gray-100 flex flex-col justify-center text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] items-center box-border p-3 sm:p-6">
        <p>{props.content}</p>
        <div className="flex flex-row w-[60%] mt-3 justify-between self-center">
          {logoLists}
        </div>
      </div>
    </div>
    </a>
  );
};

export default BigProject;

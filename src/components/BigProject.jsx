import React from "react";
import { useState } from "react";

const BigProject = (props) => {
  const [grayScale, setGrayScale] = useState("");

  return (
    <div
      className="flex flex-row h-[300px] w-[100%] justify-center transition-all duration-200 hover:scale-[102%] cursor-pointer"
      onMouseEnter={() => setGrayScale("grayscale-[0]")}
      onMouseLeave={() => setGrayScale("grayscale-[0.5]")}
    >
      <div className="w-[500px] self-center ">
        <div
          className={`transition-all duration-200 cursor-pointer filter   mr-4 grayscale-[0.5] ${grayScale}`}
        >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.img} className="w-[100%]"></img>
          </a>
        </div>
      </div>

      <p className="self-center bg-lightblue w-[500px] h-[200px] text-gray-100 flex justify-center text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] items-center box-border p-6">
        {props.content}
      </p>
    </div>
  );
};

export default BigProject;

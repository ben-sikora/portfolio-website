import React from 'react'

const BigProject = (props) => {



  return (
    <div className="flex flex-row h-[300px] w-[100%] justify-center">
      <div className="w-[500px] self-center">
        <div className="transition-all duration-200 cursor-pointer filter  hover:scale-[102%] mr-4 grayscale-[0.5] hover:grayscale-0">
          <a href="#">
            <img src={props.img} className="w-[100%]"></img>
          </a>
        </div>
      </div>

        <p className="self-center bg-lightblue w-[500px] h-[200px] text-gray-100 flex justify-center items-center box-border p-6">
          {props.content}
        </p>
    </div>
  );
};

export default BigProject;

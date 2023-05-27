import React from "react";

const IndProject = (props) => {
  const project=props.obj
  return (
    <div className="transition-all duration-200 cursor-pointer filter  hover:scale-[102%]">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row w-[500px] justify-between ">
          {/*Pictures */}
          <div className="grid w-[270px] grid-cols-6 h-[160px] grid-rows-4 mr-3">
            <div className="bg-darkblue row-start-2 row-end-4 col-end-7 col-start-1 z-0"></div>
            <div className="col-start-2 col-end-6 row-start-1 row-end-5 z-10 object-contain flex justify-center border-black border-2 bg-white">
              <img className="" src={project.img}></img>
            </div>
          </div>
          {/*Text */}
          <div className="bg-lightblue h-[150px] w-[300px] flex justify-center items-center object-contain">
            <p className="text-display text-[14px] font-[400] text-white m-4">
              {project.content}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default IndProject;

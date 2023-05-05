import React, { useState } from "react";
import IndProject from "./IndProject";
import BigProject from "./BigProject";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  let condProjects;

  if (showMore) {
    condProjects = <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 grid-row-2 h-[80%] justify-items-center items-center">
          <IndProject />
          <IndProject />
          <IndProject />
          <IndProject />
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShowMore(false);
          }}
        >
          Show Less
        </button>
    </div>;
  } else {
    condProjects = (
      <div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShowMore(true);
          }}
        >
          Show More
        </button>
      </div>
    );
  }

  /*hover:brightness-50*/
  return (
    <div className="" id="projects-page">
      <div className="flex flex-col items-center">
        <h2 className="text-display text-[64px] font-[800] text-darkgreen mb-6">
          {" "}
          Projects
        </h2>
        <BigProject />
        <BigProject />

        {condProjects}
      </div>
    </div>
  );
};

export default Projects;

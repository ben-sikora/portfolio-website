import React, { useState } from "react";
import IndProject from "./IndProject";
import BigProject from "./BigProject";
import FaceRecApp from "../assets/FaceRecApp.png"
import SummerDev from "../assets/SummerDev.png"
import { contentIndProjects } from "../content";
import { contentBigProjects } from "../content";
import { motion } from "framer-motion"


const Projects = () => {
  const [showMore, setShowMore] = useState(false);


  const faceRecContent='FaceRec is a full-stack web app that utilizes the Clarifai API to identify faces in any image. Users have the option to also create an account to keep track of how many images are uploaded.'


  const summerContent='Summer is a full-stack web app that can summarize any length of document or text using ChatGPT. Normally ChatGPT has a prompt limit, but Summer bypasses the limit by automatically breaking up the document for you. As the API costs money for each call, there is only a limited number of requests per user.'

  let condProjects;



  if (showMore) {
    condProjects = <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:grid-row-2 h-[80%] justify-items-center items-center mt-4"> 
          {contentIndProjects.map(function(contentIndProject, i){
            return <IndProject obj={contentIndProject} key={i} />;})}
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-9"
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
    <motion.div 
    initial={{ opacity: 0, y:-75, x:-10}}
    whileInView={{ opacity: 1, y:0, x:0}}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.8}}>
    <div className="" id="projects-page">
      <div className="flex flex-col items-center">
        <h2 className="text-display text-[2.4rem] md:text-[2.9rem] lg:text-[3.5rem] font-[800] text-darkgreen mb-6">
          Projects
        </h2>
        <h4 className='font-writing text-[1.3rem] md:text-[1.5rem] font-[500] leading-10 ml-10 text-center mb-5'>"Curiosity is at the center of all that I do. I believe that each new challenge has the potential to expand my understanding of myself and the world around me.”</h4>

        {contentBigProjects.map(function(contentBigProject, i){
            return <BigProject link={contentBigProject.link} img={contentBigProject.img} content={contentBigProject.content} key={i} />;})}
        {/* 
        <BigProject content={faceRecContent} link='https://face-recognition-app-me9o.onrender.com/' img={FaceRecApp}/>
        <BigProject content={summerContent} link= 'https://www.docsummer.com/' img={SummerDev}/>
        */}

        {condProjects}
      </div>
    </div>
    </motion.div>
  );
};

export default Projects;

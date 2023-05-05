import React from 'react'
import FaceRecApp from "../assets/FaceRecApp.png"

const BigProject = () => {



  return (
    <div className="flex flex-row h-[300px] w-[100%] justify-center">
      <div className="w-[500px] self-center">
        <div className="transition-all duration-200 cursor-pointer filter  hover:grayscale-[0.5] hover:scale-[102%] mr-4">
          <a href="#">
            <img src={FaceRecApp} className="w-[100%]"></img>
          </a>
        </div>
      </div>

      <div className="self-center bg-lightblue w-[500px] h-[250px] text-gray-100 flex justify-center items-center box-border p-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          orci sagittis eu volutpat odio facilisis mauris. Neque laoreet
          suspendisse interdum consectetur libero. Eget aliquet nibh praesent
          tristique magna sit amet. Volutpat sed cras ornare arcu dui. Id semper
          risus in hendrerit gravida. Aenean pharetra magna ac placerat
          vestibulum lectus. Porttitor leo a diam sollicitudin tempor id eu
          nisl. Vitae et leo duis ut. 
        </p>
      </div>
    </div>
  );
};

export default BigProject;

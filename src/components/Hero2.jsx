import React from "react";
import hiking from "../assets/hiking.jpg";
import portrait from "../assets/portrait.jpeg";
import paintbrushLightBlue from "../assets/paintbrushLightblueL.svg";
import paintbrushDarkblue from "../assets/paintbrushDarkblueL.svg";

const Hero2 = () => {
  return (
    <div className="flex flex-row max-h-[710px] mt-2 sm:mt-5 md:mt-10 justify-center" id='hero-page'>
      <div className="w-[300px] md:w-[400px] lg:w-[560px] mt-4 ml-8 shrink-0">
        {/*Writing on Top*/}

            <div className="grid grid-rows-1 grid-cols-1 box-border">
            <img src={paintbrushLightBlue} className='h-auto w-[70%] z-0 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto sm:ml-0 sm:mr-0'/>
            <h1 className="font-writing font-normal text-white text-[1.5rem] md:text-[1.9rem]  lg:text-[2.4rem] z-10 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto sm:ml-9 mt-2">Hi  my name is</h1>
            </div>

            <div className="grid grid-rows-1 grid-cols-1 box-border mt-3">
            <img src={paintbrushDarkblue} className='h-auto w-[85%] z-0 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto sm:ml-4'/>
            <h1 className="font-writing font-normal text-white text-[2.5rem] md:text-[3.3rem]   lg:text-[5rem] row-start-1 row-end-2 col-start-1 col-end-2 z-10 mx-auto sm:ml-12 mt-2">Ben Sikora</h1>
            </div>

            <h1 className="text-[2.4rem] md:text-[2.9rem] lg:text-[3.5rem] font-[800] leading-[50px] lg:leading-[60px] text-darkgreen text-center sm:text-left">
          I like <span className="text-lightblue">learning</span> and
          <span className="text-darkblue"> building</span> cool things
        </h1>
        <p className="mt-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] font-[4000] leading-[35px] md:leading-[44px] text-black text-center sm:text-left">
          I am a computer scientist passionate about Full-Stack Development,
          Cloud Engineering, and all things creating.
        </p>
    
      </div>

      {/* Text*/}

      {/*<div className="w-[383px] h-[530px] relative mt-4">
          <div className="w-[363px] h-[513px] bg-black absolute bottom-0 right-0"></div>
          <img
            src={hiking}
            alt="portrait of ben"
            className="w-[328px] h-[501px] object-contain absolute top-0 left-0"
          />
        </div> */}
        <div className="md:flex-grow hidden sm:flex"> 
        <img
                    src={hiking}
                    alt="portrait of ben"
                    className="w-[280px] md:w-[350px] m-auto shadow-blackBox"
          />  
        </div>
    </div>
  );
};

export default Hero2;

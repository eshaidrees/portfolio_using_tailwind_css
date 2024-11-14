import React from 'react';
import Image from 'next/image';

export default function Project (){
  return (

    <div className='bg-blue-950 p-8 min-h-screen text-center'>
        <title>Projects</title>
        <h1 className="font-bold text-4xl mb-4 text-white">My Projects</h1>
    <div className="flex flex-wrap justify-center gap-4 w-full">

        <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg  p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
         <h3 className="font-bold text-base text-white ">Static Interactive Resume</h3>
         <Image 
            src="/img/project-1.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           /> 
            <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
               <a href="https://hachathone-milestone-1-2.vercel.app/" target="_blank">
                View 
               </a>
            </button>
        </div>
        
        <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
        <h3 className="font-bold text-base text-white">Dynamic Shareable Resume</h3>
        <Image 
            src="/img/project-2.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
               <a href="https://hackathon-milestone-5-omega-gules.vercel.app/" target="_blank">
                View
               </a>
            </button>
        </div>

        <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
        <h3 className="font-bold text-base text-white">Count Down Timer </h3>
        <Image 
            src="/img/project-4.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
               <a href="https://github.com/eshaidrees/count-down-timer.git" target="_blank" >
                View
               </a>
            </button>           
        </div>
        <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px]justify-center text-center rounded-lg shadow-lg  p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
        <h3 className="font-bold text-base text-white">Wheather Widget App </h3>
        <Image 
            src="/img/project-3.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
               <a href="https://github.com/eshaidrees/weather-widget-app.git" target="_blank">
                View
               </a>
            </button>           
        </div>
        </div>
        </div>


  )   

}

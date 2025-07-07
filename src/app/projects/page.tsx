'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import DarkMode from '../components/DarkMode';
import React from 'react';

export default function Projects() {
  const projects = [
     {
      title: 'Company Portfolio',
      img: '/img/Company-Portfolio.jpg',
      link: 'https://company-portfolio-sable-six.vercel.app/',
    },
    {
      title: 'Figma Template',
      img: '/img/Figma.png',
      link: 'https://assignment-figma-design.vercel.app/',
    },
    {
      title: 'Sofa Website',
      img: '/img/Sofa_web.png',
      link: 'https://hackathon-2-86ga.vercel.app/',
    },
    {
      title: 'E-Commerce Website',
      img: '/img/e-commerce.png',
      link: 'https://milestone-3-e-commerce-website-neon.vercel.app/',
    },
    {
      title: 'Static Interactive Resume',
      img: '/img/project-1.png',
      link: 'https://hachathone-milestone-1-2.vercel.app/',
    },
    {
      title: 'Dynamic Shareable Resume',
      img: '/img/project-2.png',
      link: 'https://hackathon-milestone-5-omega-gules.vercel.app/',
    },
    {
      title: 'Count Down Timer',
      img: '/img/project-4.png',
      link: 'https://github.com/eshaidrees/count-down-timer.git',
    },
    {
      title: 'Weather Widget App',
      img: '/img/project-3.png',
      link: 'https://github.com/eshaidrees/weather-widget-app.git',
    },
   
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen py-16 px-6 w-full">
      <div className="absolute top-5 right-5">
        <DarkMode />
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-6 mb-10">My Projects</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#647291] w-[300px] h-[420px] rounded-lg shadow-lg p-4 flex flex-col justify-between hover:scale-105 hover:bg-[#8a8aaa] transition duration-300"
            >
              <h3 className="font-bold text-white text-lg mb-2">{project.title}</h3>
              <Image
                src={project.img}
                alt={project.title}
                width={350}
                height={200}
                className="rounded-md object-cover"
              />
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block bg-[#1E2A47] text-white px-4 py-2 rounded-md hover:bg-black"
                rel="noopener noreferrer"
              >
                View
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}




// import React from 'react';
// import Image from 'next/image';

// export default function Project (){
//   return (

//     <div className='bg-blue-950 p-8 min-h-screen text-center'>
//         <title>Projects</title>
//         <h1 className="font-bold text-4xl mb-4 text-white">My Projects</h1>
//     <div className="flex flex-wrap justify-center gap-4 w-full">

//         <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg  p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
//          <h3 className="font-bold text-base text-white ">Static Interactive Resume</h3>
//          <Image 
//             src="/img/project-1.png" 
//             alt="Profile Picture" 
//             width={350}  
//             height={350} 
//            /> 
//             <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
//                <a href="https://hachathone-milestone-1-2.vercel.app/" target="_blank">
//                 View 
//                </a>
//             </button>
//         </div>
        
//         <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
//         <h3 className="font-bold text-base text-white">Dynamic Shareable Resume</h3>
//         <Image 
//             src="/img/project-2.png" 
//             alt="Profile Picture" 
//             width={350}  
//             height={350} 
//            />
//             <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
//                <a href="https://hackathon-milestone-5-omega-gules.vercel.app/" target="_blank">
//                 View
//                </a>
//             </button>
//         </div>

//         <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px] justify-center text-center rounded-lg shadow-lg p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
//         <h3 className="font-bold text-base text-white">Count Down Timer </h3>
//         <Image 
//             src="/img/project-4.png" 
//             alt="Profile Picture" 
//             width={350}  
//             height={350} 
//            />
//             <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
//                <a href="https://github.com/eshaidrees/count-down-timer.git" target="_blank" >
//                 View
//                </a>
//             </button>           
//         </div>
//         <div className="bg-[#647291] font-normal flex flex-col w-[300px] h-[400px]justify-center text-center rounded-lg shadow-lg  p-6 ransition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#8a8aaa]">
//         <h3 className="font-bold text-base text-white">Wheather Widget App </h3>
//         <Image 
//             src="/img/project-3.png" 
//             alt="Profile Picture" 
//             width={350}  
//             height={350} 
//            />
//             <button className="bg-[#1E2A47] text-white mt-5 px-4 py-2 rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-black">
//                <a href="https://github.com/eshaidrees/weather-widget-app.git" target="_blank">
//                 View
//                </a>
//             </button>           
//         </div>
//         </div>
//         </div>


//   )   

// }

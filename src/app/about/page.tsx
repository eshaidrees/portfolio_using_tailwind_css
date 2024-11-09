import Image from "next/image";
import React from "react";

export default function Home(){
  return (
   <div className="bg-blue-950 flex flex-col md:flex-row justify-center items-center p-6 md:p-16 lg:p-20 gap-8 lg:gap-12 max-w-8xl mx-auto">

        <title className="text-white">About</title> 
        <div className="w-full md:w-1/2 max-w-xs md:max-w-sm lg:max-w-md mx-auto">
           <Image 
             className="w-full h-auto rounded-full  "
             src="/img/image_2.png" 
             alt="Profile Picture" 
             width={250}  
             height={250} 
            />
        </div>
        <div className='w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 p-4 lg:p-6'>
           <h1 className="font-bold mb-4 text-white text-2xl">About Me</h1>
           <p className="text-left text-white">I&apos;m an intermediate student.I recently completed a few steps in learning HTML, CSS, TypeScript and Javascript I&apos;m currently expanding my knowledge in Next.js and starting my journey into Artificial Intelligence.</p>
       </div>
  </div>
  );
};

'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import DarkMode from '../components/DarkMode';
export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-black w-full py-16 px-6">
      <div className="absolute top-5 right-5">
        <DarkMode />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-9 gap-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 max-w-xs md:max-w-sm lg:max-w-md"
        >
          <Image
            className="w-full h-auto rounded-full border-4 border-white shadow-2xl"
            src="/img/image_2.png"
            alt="About Esha"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="font-bold text-white text-4xl md:text-5xl mb-4 drop-shadow-lg">About Me</h1>
          <p className="text-white text-lg leading-relaxed max-w-xl drop-shadow-sm">
            I'm an intermediate student who recently completed several steps in learning HTML, CSS, TypeScript, and JavaScript.
            I'm currently expanding my skills with Next.js and starting my journey into Artificial Intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  );
}



// import Image from "next/image";
// import React from "react";

// export default function Home(){
//   return (
//    <div className="bg-blue-950 flex flex-col md:flex-row justify-center items-center min-h-screen p-6 md:p-16 lg:p-20 gap-8 lg:gap-12 max-w-8xl mx-auto">

//         <title className="text-white">About</title> 
//         <div className="w-full md:w-1/2 max-w-xs md:max-w-sm lg:max-w-md mx-auto">
//            <Image 
//              className="w-full h-auto rounded-full  "
//              src="/img/image_2.png" 
//              alt="Profile Picture" 
//              width={250}  
//              height={250} 
//             />
//         </div>
//         <div className='w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 p-4 lg:p-6'>
//            <h1 className="font-bold mb-4 text-white text-2xl">About Me</h1>
//            <p className="text-left text-white">I&apos;m an intermediate student.I recently completed a few steps in learning HTML, CSS, TypeScript and Javascript I&apos;m currently expanding my knowledge in Next.js and starting my journey into Artificial Intelligence.</p>
//        </div>
//   </div>
//   );
// };

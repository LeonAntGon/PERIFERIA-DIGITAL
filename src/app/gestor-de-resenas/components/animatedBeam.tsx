"use client"
import React from 'react';
import { motion } from 'framer-motion';

const lineWidth = 80; // width of the line in pixels
const lineHeight = 2; // height of the line

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center">
        <div className="bg-[#2b2836] border-2 border-[#33313d] rounded-2xl flex items-center justify-center w-[50px] h-14 p-2">
        <svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 16.01L12.01 15.9989" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="#ffffff" stroke-width="1.5"></path></svg>
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#33313d', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-[#f7e98e] to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-[#f7e98e] border-2 border-[#f7e98e] rounded-2xl flex items-center justify-center w-[90px] h-[75px] p-4 overflow-hidden shadow-[#f7e98e]">
           <svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#33313d', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-[#f7e98e] to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="bg-[#2b2836] border-2 border-[#33313d] rounded-2xl flex items-center justify-center w-[50px] h-14 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="1.5"> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path> <path d="M9.5 9h.01"></path> <path d="M14.5 9h.01"></path> <path d="M9.5 13a3.5 3.5 0 0 0 5 0"></path> </svg> 
        </div>
      </div>
    </div>
  );
};





const BentoBox1 = () => {
  

  return (
    <div className="flex justify-center items-center md:p-5 rounded-lg">        
          
            <div className="flex flex-col justify-center bg-black rounded-lg md:p-[50px] p-[20px]">
              <LogoBeam />
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold my-4 text-center">Supera a la competencia.</h3>
                
              </div>
            </div>
          
          
        </div>
    
  );
};


function AnimatedBeam() {
  return (
    <div className="text-center ">
      <BentoBox1 />
    </div>
  );
}

export default AnimatedBeam;
          
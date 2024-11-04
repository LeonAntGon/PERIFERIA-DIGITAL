"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["Desarrollo Web", "Posicionamiento Web", "Google Ads", "Sistemas con IA", "Chatbots" ];

const WordsRotating = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 w-40 overflow-hidden mx-auto">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 90 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-md pt-2 font-bold">{words[index]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function WordsRotatingComp() {
  return (
    <div className="text-center py-8 px-2">
      <h2 className='text-gray-200 text-center font-semibold'>Potenciamos tu presencia online, alcance en redes y mucho más con nuestros 
        <span className='text-[#F0E68C]'> servicios digitales</span> <br></br>
      <span className='text-[#F7E98E]'><WordsRotating /></span></h2>
    </div>
  );
}


"use client";
import { motion } from "framer-motion";

const AnimatedTextUnderlign = () => {
  // ... existing code ...
  // Se eliminó el objeto `draw` y el componente `motion.svg`
};

function Drawing() {
  return (
    <div className="">
      {/* {{ edit_1 }} */}
      <h2 className="text-5xl font-bold tracking-tight text-gray-200 sm:text-7xl">
        {' '}
        <span className="relative whitespace-nowrap text-[#F7E98E] font-alliance">
          Escala
        </span>
        {' '} tu negocio
      </h2>
      {/* {{ edit_2 }} */}
    </div>
  );
}

export default Drawing;
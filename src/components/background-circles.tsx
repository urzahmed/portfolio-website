import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0.5, 1, 1, 1.5, 0.5],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["30%", "30%", "60%", "90%", "30%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border dark:border-gray-300 border-gray-800 opacity-30 rounded-full h-[200px] w-[200px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border dark:border-gray-300 border-gray-800 opacity-30 rounded-full h-[300px] w-[300px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border dark:border-gray-300 border-gray-800  opacity-30 rounded-full h-[500px] w-[500px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border dark:border-gray-300 border-green8700 opacity-20 h-[510px] w-[510px] md:h-[650px] md:w-[650px] 
            animate-pulse mt-64 md:mt:52 rounded-full"
      />
      <div />
      <div
        className="absolute border dark:border-gray-300 border-gray-800 opacity-30 rounded-full h-[800px] w-[800px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
    </motion.div>
  );
}
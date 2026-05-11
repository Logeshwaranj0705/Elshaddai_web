import React from "react";
import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 top-0 z-[9999] h-[100dvh] w-screen bg-black pointer-events-none"
    >
      <div className="flex h-full w-full items-center justify-center px-4">
        <div className="flex w-full max-w-[340px] flex-col items-center justify-center text-center sm:max-w-[500px]">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            className="text-[24px] font-bold leading-tight text-white sm:text-[32px] md:text-[38px]"
          >
            <span className="text-[#00c9a7]">Elshaddai</span> Enterprises
          </motion.div>

          <motion.div
            className="mt-5 h-[2px] max-w-[60vw] rounded-full bg-gradient-to-r from-blue-500 via-[#00c9a7] to-blue-500"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          />

          <motion.div
            className="mt-4 text-[10px] uppercase tracking-[0.22em] text-gray-400 sm:text-xs sm:tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            Debt Recovery Solutions
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
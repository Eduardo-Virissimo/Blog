"use client";

import { motion } from "framer-motion";

// icon image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute w-[298px] h-[298px] xl:w-[598px] xl:h-[498px] mix-blend-lighten flex justify-center items-center"
        >
          <img
            src="./assets/community.svg"
            alt=""
            className="object-contain w-[50%]"
          />
        </motion.div>
        {/* CIRCULO EM VOLTA DA IMAGEM */}
        <motion.svg
          className="w-[298px] xl:w-[598px] h-[298px] xl:h-[498px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.polygon
            points="253,3 493,253 253,503 13,253"
            
            cx="253"
            cy="453"
            r="650"

            stroke="#C7ADFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              points: "253,3 493,253 253,503 13,253",
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              points: [
                "253,3 493,253 253,503 13,253",
                "253,50 470,253 253,470 36,253",
                "253,100 450,253 253,450 56,253",
              ],
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

import { motion } from "framer-motion";

// Variantes
const stairanimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Função para inverter o índice
const reverseIndex = (index) => {
  const totalSteps = 8;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairanimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-[#C7ADFF] relative"
        />
      ))}
    </>
  );
};

export default Stairs;

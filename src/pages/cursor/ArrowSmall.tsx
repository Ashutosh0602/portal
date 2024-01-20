import { motion } from "framer-motion";

const ArrowSmall = ({ width = "14", height = "14" }) => {
  return (
    <div style={{ mixBlendMode: "exclusion" }}>
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.3,
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d="M1 15L15 1M15 1H1M15 1V15"
          stroke="white"
          stroke-width="1"
          stroke-linejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export default ArrowSmall;

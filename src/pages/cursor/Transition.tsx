import { motion } from "framer-motion";
import "./Transition.module.css";
import Cursor from "./Cursor";

const Transition = ({
  children,
  delay = 0,
  colorIn = "black",
  colorOut = "black",
}: any) => {
  return (
    <div className="transition-container center-column">
      {children}
      <motion.div
        style={{
          backgroundColor: colorIn,
        }}
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: colorOut,
        }}
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: delay }}
      ></motion.div>
      <Cursor />
    </div>
  );
};

export default Transition;

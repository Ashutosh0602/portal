import { motion } from "framer-motion";
import { memo } from "react";
import "./TextTransition.module.css";
import { useCustomWhileInView } from "../../hooks/useCustomWhileInView";

const TextTransition = ({
  text,
  size = 1,
  transitionDelay = 1,
  transitionDuration = 1,
  style,
  overlayDivColor = "var(--bg-white)",
  textStyle,
}: any) => {
  const divTransitionVariant = {
    hidden: {
      scaleX: 1,
    },
    visible: {
      scaleX: 0,
      transition: {
        duration: transitionDuration,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: transitionDelay,
      },
    },
  };

  const textVariant = {
    hidden: {
      translateY: `${size}rem`,
    },
    visible: {
      translateY: 0,
      targetY: -`${size}rem`,
      transition: {
        duration: transitionDuration + 0.2,
        delay: transitionDelay + 0.2,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const [ref, controls]: any = useCustomWhileInView();

  return (
    <div className="text-transition" ref={ref} style={style}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={divTransitionVariant}
        style={{
          backgroundColor: overlayDivColor,
        }}
        className="text-transition-overlay"
      ></motion.div>
      <div className="text-transition-text-hide">
        <motion.p
          initial="hidden"
          animate={controls}
          viewport={{ once: true }}
          variants={textVariant}
          className="ext-transition-text"
          style={{
            fontSize: `${size}rem`,
            lineHeight: `${0.8 * size}rem`,
            ...textStyle,
          }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

const TextPushInTransition = ({
  text,
  size = 1,
  transitionDelay = 1,
  transitionDuration = 1,
  style,
  textStyle,
}: any) => {
  const textVariant = {
    hidden: {
      translateY: `${size}rem`,
    },
    visible: {
      translateY: 0,
      targetY: -`${size}rem`,
      transition: {
        duration: transitionDuration + 0.2,
        delay: transitionDelay + 0.2,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const [ref, controls]: any = useCustomWhileInView();

  return (
    <div className="text-transition" ref={ref} style={style}>
      <div className="text-transition-text-hide">
        <motion.p
          initial="hidden"
          animate={controls}
          viewport={{ once: true }}
          variants={textVariant}
          className="ext-transition-text"
          style={{
            fontSize: `${size}rem`,
            lineHeight: `${1 * size}rem`,
            ...textStyle,
          }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default memo(TextTransition);
export { TextPushInTransition };

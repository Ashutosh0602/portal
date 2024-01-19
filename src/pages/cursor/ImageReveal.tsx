import "../styles/ComponentStyles/ImageReveal.css";
import { motion } from "framer-motion";
import { useCustomWhileInView } from "../../hooks/useCustomWhileInView";

const clipPathVariant = {
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 1,
    },
  },
};

const imageAnimationVariant = {
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.6,
    },
  },
  hidden: {
    scale: 1.2,
  },
};

const ImageReveal = ({
  width = "400px",
  height = "300px",
  imageSource,
}: any) => {
  const [ref, controls]: any = useCustomWhileInView();

  return (
    <div
      className="parent"
      style={{
        width: width,
        height: height,
        overflow: "hidden",
      }}
    >
      <div ref={ref} className="image-intersection"></div>
      <motion.div
        className="image-reveal-overLay"
        animate={controls}
        viewport={{
          once: true,
        }}
        variants={clipPathVariant}
      >
        <motion.img
          initial="hidden"
          animate={controls}
          viewport={{
            once: true,
          }}
          variants={imageAnimationVariant}
          className="image-reveal-image"
          src={imageSource}
          alt="image"
          //   srcset=""
        />
      </motion.div>
    </div>
  );
};

export default ImageReveal;

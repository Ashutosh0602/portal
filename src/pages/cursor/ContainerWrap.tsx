import { motion } from "framer-motion";

function ContainerWrap(props: any) {
  return (
    // <div></div>
    <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
      {props.children}
      <motion.div
        initial={{
          width: "100%",
          height: "100%",
        }}
        animate={{
          width: "100%",
          height: "0",
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            // type: "spring",
          },
        }}
        exit={{
          width: "100%",
          height: "100%",
          transition: {
            delay: 0,
            duration: 1,
            ease: "easeInOut",
            // type: "spring",
          },
        }}
        style={{
          position: "absolute",
          bottom: "0",
          left: 0,
          width: "100%",
          height: "110%",
          backgroundColor: "#474747",
          zIndex: "20",
        }}
      ></motion.div>
      <motion.div
        initial={{
          width: "100%",
          height: "100%",
        }}
        animate={{
          width: "100%",
          height: "0",
          transition: {
            duration: 1,
            ease: "circIn",
            // type: "spring",
          },
        }}
        exit={{
          width: "100%",
          height: "100%",
          transition: {
            delay: 1,
            duration: 1,
            ease: "circOut",
            // type: "spring",
          },
        }}
        style={{
          position: "absolute",
          top: "0",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#111111",
          zIndex: "20",
        }}
      ></motion.div>
    </div>
  );
}

export default ContainerWrap;

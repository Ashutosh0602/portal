import classes from "./Project.module.css";
import Transition from "../cursor/Transition";
import { motion } from "framer-motion";
import ContainerWrap from "../cursor/ContainerWrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef } from "react";

function Project() {
  const swiperREF = useRef<any>();

  setTimeout(() => {
    swiperREF.current.swiper.slideNext(1000);
  }, 5400);
  return (
    <Transition>
      <section
        className={classes.project_section}
        //   style={{ backgroundColor: "red" }}
      >
        <Swiper
          style={{ width: "100vw", height: "100vh" }}
          className="mySwiper"
          ref={swiperREF}
        >
          <SwiperSlide
            style={{
              width: "100%",
              height: "45%",
              //   backgroundColor: "red",
            }}
          >
            <ContainerWrap>
              <motion.svg
                viewBox="0 -10 100 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.text
                  initial={{
                    strokeDashoffset: "0%",
                    strokeDasharray: "0% 32%",
                    fill: "transparent",
                    strokeWidth: 0.1,
                    stroke: "white",
                  }}
                  animate={{
                    strokeDashoffset: "-50%",
                    strokeDasharray: "32% 0",
                    strokeWidth: 0.5,
                    stroke: "white",
                    //   fill: "white",
                  }}
                  transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
                  x="50%"
                  y="50%"
                  // dy="0.12rem"
                  textAnchor="middle"
                  strokeLinejoin="bevel"
                  strokeLinecap="square"
                  className="text-body"
                  fontSize="100%"
                  fontFamily="Roboto"
                  // fill="white"
                >
                  PROJECTS
                </motion.text>
              </motion.svg>
            </ContainerWrap>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </section>
    </Transition>
  );
}

export default Project;

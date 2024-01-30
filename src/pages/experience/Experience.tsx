import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Experience.module.css";
import web from "../../assets/projectsImg/Web.svg";
import { useRef } from "react";
import { motion } from "framer-motion";
import ContainerWrap from "../cursor/ContainerWrap";
import Transition from "../cursor/Transition";
import nextEl from "../../assets/projectsImg/nextEl.svg";
import prevEl from "../../assets/projectsImg/prevEl.svg";
import { experience } from "./ExperienceData";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Experience() {
  const swiperREF = useRef<any>();
  const prevREF = useRef<any>();
  const nextREF = useRef<any>();

  setTimeout(() => {
    swiperREF.current.swiper.slideNext(1000);
  }, 5400);

  setTimeout(() => {
    prevREF.current.style.visibility = "visible";
    nextREF.current.style.visibility = "visible";
  }, 6000);
  return (
    <Transition>
      <section className={classes.experience_section}>
        <Swiper
          style={{ width: "100vw", height: "100vh" }}
          className="mySwiper"
          noSwiping={true}
          ref={swiperREF}
        >
          <SwiperSlide
            style={{
              width: "100%",
              height: "45%",
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
                  Experience
                </motion.text>
              </motion.svg>
            </ContainerWrap>
          </SwiperSlide>
          {experience.map((ls) => {
            return (
              <SwiperSlide style={{ overflow: "scroll" }}>
                <Card
                  style={{
                    backgroundColor: "#1b1b1b",
                    border: "1px solid #1b1b1b",
                    margin: "1.5rem",
                  }}
                >
                  <ContainerWrap>
                    <CardHeader>
                      <CardTitle>
                        <div style={{ fontSize: "3rem", color: "whitesmoke" }}>
                          {ls.title}
                        </div>
                        <div style={{ color: "gray" }}>{ls.company}</div>
                      </CardTitle>
                      <img
                        src={ls.img}
                        style={{
                          width: "calc(100vw * 0.8)",
                          margin: "1rem auto",
                        }}
                      />
                    </CardHeader>
                    <CardFooter
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div style={{ width: "100%" }}>
                        <Link className="textlink" to={ls.link} target="_blank">
                          <Button
                            style={{
                              width: "100%",
                              marginRight: "1rem",
                              backgroundColor: "#111111",
                              border: "1px solid #111111",
                              color: "whitesmoke",
                              cursor: "none",
                            }}
                            variant="outline"
                          >
                            <img
                              style={{ width: "1.5rem", marginRight: "1rem" }}
                              src={web}
                            />
                            Website
                          </Button>
                        </Link>
                      </div>
                      <div>
                        <ol start={1}>
                          {ls.added.map((item) => {
                            return (
                              <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                style={{
                                  marginTop: "1rem",
                                  letterSpacing: 0,
                                  fontSize: "1.5rem",
                                  color: "whitesmoke",
                                }}
                              >
                                {item}
                              </motion.li>
                            );
                          })}
                        </ol>
                      </div>
                    </CardFooter>
                  </ContainerWrap>
                </Card>
              </SwiperSlide>
            );
          })}
          <div
            className="swiper-button-next"
            ref={nextREF}
            style={{
              color: "transparent",
              width: "4rem",
              height: "4rem",
              marginLeft: "1rem",
              visibility: "hidden",
              // backgroundColor: "red",
            }}
            onClick={() => swiperREF.current.swiper.slideNext(800)}
          >
            <img style={{ width: "100%", height: "100%" }} src={nextEl} />
          </div>
          <div
            className="swiper-button-prev"
            ref={prevREF}
            style={{
              color: "transparent",
              width: "4rem",
              height: "4rem",
              marginLeft: "1rem",
              visibility: "hidden",
              // backgroundColor: "red",
            }}
            onClick={() => swiperREF.current.swiper.slidePrev(800)}
          >
            <img src={prevEl} style={{ width: "100%", height: "100%" }} />
          </div>
        </Swiper>
      </section>
    </Transition>
  );
}

export default Experience;

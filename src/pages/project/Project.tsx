import classes from "./Project.module.css";
import Transition from "../cursor/Transition";
import { motion } from "framer-motion";
import ContainerWrap from "../cursor/ContainerWrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { projectsList } from "./projectData";
import { Link } from "react-router-dom";

const staggerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
                  PROJECTS
                </motion.text>
              </motion.svg>
            </ContainerWrap>
          </SwiperSlide>
          <SwiperSlide
            style={{
              overflow: "scroll",
              paddingTop: "5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingBottom: "3rem",
            }}
          >
            {/* <div> */}
            <div></div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              transition={{ delay: 5, staggerChildren: 0.3, delayChildren: 6 }}
              style={{ margin: "0 auto" }}
              className="grid lg:grid-cols-6 md:grid-cols-4 gap-10"
            >
              {projectsList?.map((ls) => {
                return (
                  <motion.div
                    variants={staggerVariants}
                    transition={{ duration: 1 }}
                    className="col-span-2 "
                  >
                    <Link state={ls} className="textlink" to="/projectDetail">
                      <ContainerWrap>
                        <Card
                          style={{
                            backgroundColor: "#1B1B1B",

                            border: "1px solid #1B1B1B",
                          }}
                        >
                          <CardHeader>
                            <div className="flex justify-between">
                              <div>
                                <CardTitle style={{ color: "whitesmoke" }}>
                                  #{ls.title}
                                </CardTitle>
                              </div>
                              <div>
                                <Badge
                                  variant="outline"
                                  style={{
                                    width: "auto",
                                    color: "white",
                                    backgroundColor: "#a46d02",
                                    border: "2px solid #a46d02",
                                    fontWeight: 500,
                                    borderRadius: "5px",
                                    fontSize: "0.5rem",
                                    letterSpacing: "0",
                                  }}
                                >
                                  •{ls.techStack}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <div style={{ width: "100%" }}>
                            <img
                              style={{ objectFit: "cover" }}
                              src={ls.cover}
                            />
                          </div>
                          <CardContent style={{ padding: "1rem" }}>
                            <CardDescription
                              className="line-clamp-3"
                              style={{
                                lineClamp: 9,
                                letterSpacing: 0,
                                color: "lightgray",
                                fontFamily: "Poppins",
                              }}
                            >
                              {ls.description}
                            </CardDescription>
                            {/* <p>Card Content</p> */}
                          </CardContent>
                          <CardFooter className="flex">
                            {ls?.techUsed.map((ls) => {
                              return (
                                <img
                                  style={{
                                    width: "1.3rem",
                                    marginRight: "1rem",
                                  }}
                                  src={ls.techImg}
                                />
                              );
                            })}
                          </CardFooter>
                        </Card>{" "}
                      </ContainerWrap>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      </section>
    </Transition>
  );
}

export default Project;

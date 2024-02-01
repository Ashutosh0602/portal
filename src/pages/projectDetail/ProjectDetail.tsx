import { Link, useLocation } from "react-router-dom";
import Transition from "../cursor/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import classes from "./ProjectDetail.module.css";
import { motion, useInView } from "framer-motion";
import nextEl from "../../assets/projectsImg/nextEl.svg";
import prevEl from "../../assets/projectsImg/prevEl.svg";
import ContainerWrap from "../cursor/ContainerWrap";

function ProjectDetail() {
  const projectREF = useRef<any>();

  const techREF = useRef<any>();
  const isInView = useInView(techREF, { once: true, amount: 0 });

  const detailREF = useRef<any>();
  const detailisInView = useInView(detailREF, { once: true, amount: 0 });

  useEffect(() => {
    projectREF?.current.swiper.disable();
  }, []);

  setTimeout(() => {
    projectREF.current.swiper.enable();
    projectREF.current.swiper.slideNext(700);
  }, 5000);
  const { state } = useLocation();

  return (
    <Transition>
      <ContainerWrap>
        <section
          className="p-6"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#111111",
            overflow: "scroll",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 3, duration: 1 },
            }}
            style={{
              color: "whitesmoke",
              fontSize: "4rem",
              fontFamily: "Roboto",
              fontWeight: 700,
            }}
          >
            #{state.title}
          </motion.div>
          <motion.div
            initial={{ width: "70%", x: "22.5%", y: 80 }}
            animate={{
              width: "100%",
              x: 0,
              y: 0,
              transition: { delay: 2, duration: 1 },
            }}
          >
            <Swiper
              ref={projectREF}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              className={classes.swiper_projectDetails}
              style={{ height: "35rem" }}
            >
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{
                    width: "auto",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={state.cover}
                />
              </SwiperSlide>
              {state?.img.map((ls: any) => {
                return (
                  <SwiperSlide
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      style={{
                        width: "auto",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={ls.img}
                    />
                  </SwiperSlide>
                );
              })}
              <div
                className="swiper-button-next"
                style={{
                  color: "transparent",
                  width: "4rem",
                  height: "4rem",
                  marginLeft: "1rem",
                  // backgroundColor: "red",
                }}
                onClick={() => projectREF.current.swiper.slideNext(800)}
              >
                <img style={{ width: "100%", height: "100%" }} src={nextEl} />
              </div>
              <div
                className="swiper-button-prev"
                style={{
                  color: "transparent",
                  width: "4rem",
                  height: "4rem",
                  marginLeft: "1rem",
                  // backgroundColor: "red",
                }}
                onClick={() => projectREF.current.swiper.slidePrev(800)}
              >
                <img src={prevEl} style={{ width: "100%", height: "100%" }} />
              </div>
            </Swiper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 3, duration: 1, type: "spring" },
            }}
            className="flex justify-around mt-24"
          >
            <Link
              target="_blank"
              style={{ width: "50%" }}
              className="textlink"
              to={state.github}
            >
              <Button
                style={{
                  width: "100%",
                  marginRight: "1rem",
                  backgroundColor: "#1B1B1B",
                  border: "1px solid #1B1B1B",
                  color: "whitesmoke",
                  cursor: "none",
                }}
                variant="outline"
              >
                <img
                  style={{ width: "1.5rem", marginRight: "1rem" }}
                  src="https://res.cloudinary.com/dlncfovuv/image/upload/v1706798641/portfolio/github.svg"
                />
                Github
              </Button>
            </Link>
            <Link
              target="_blank"
              style={{ width: "50%" }}
              className={state?.live ? "textlink" : ""}
              to={state?.live ? state.live : "/"}
            >
              <Button
                style={{
                  width: "100%",
                  marginLeft: "1rem",
                  backgroundColor: "transparent",
                  color: "whitesmoke",
                  cursor: "none",
                  border: "1px solid whitesmoke",
                }}
                variant="outline"
              >
                <img
                  style={{ width: "1.5rem", marginRight: "1rem" }}
                  src="https://res.cloudinary.com/dlncfovuv/image/upload/v1706798641/portfolio/browser.svg"
                />
                Website
              </Button>
            </Link>
          </motion.div>
          <motion.div className="grid lg:grid-cols-6 mt-24">
            <div
              ref={detailREF}
              style={{
                color: "lightgray",
                letterSpacing: 0,
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                opacity: detailisInView ? 1 : 0,
                transform: detailisInView
                  ? "translateY(0px)"
                  : "translateY(50px)",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="lg:col-span-4 md:col-span-2 lg:text-3xl md:text-lg"
            >
              {state.detail}
            </div>
            <div ref={techREF} className="col-span-2 ">
              {state?.techUsed.map((ls: any) => {
                return (
                  <Card
                    className={classes.tech_card + " flex items-center"}
                    style={{
                      backgroundColor: "transparent",
                      marginBottom: "0.5rem",
                      border: "2px solid #1B1B1B",
                      padding: "1rem",
                      paddingTop: "0rem",
                      paddingBottom: "0rem",
                      opacity: isInView ? 1 : 0,
                      transform: isInView
                        ? "translateY(0px)"
                        : "translateY(50px)",
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <div style={{ width: "40%" }}>
                      <img src={ls.techImg} style={{ width: "3rem" }} />
                    </div>
                    <div>
                      <CardHeader style={{ letterSpacing: 0, margin: 0 }}>
                        <CardTitle style={{ color: "whitesmoke" }}>
                          {ls.tech}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {ls.techDescription}
                        </CardDescription>
                      </CardHeader>
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>{" "}
        </section>
      </ContainerWrap>
    </Transition>
  );
}

export default ProjectDetail;

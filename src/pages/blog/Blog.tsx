import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ContainerWrap from "../cursor/ContainerWrap";
import { motion } from "framer-motion";
import classes from "./Blog.module.css";
import Transition from "../cursor/Transition";
import { BlogData } from "./BlogData";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pageW = screen.width;

function Blog() {
  console.log(pageW);
  const swiperREF = useRef<any>();

  const [slides, setSlides] = useState(pageW < 600 ? 2 : 3);

  setTimeout(() => {
    swiperREF.current.swiper.slideNext(1000);
  }, 5400);
  return (
    <Transition>
      <section className={classes.blog_section}>
        <Swiper
          style={{ width: "100vw", height: "100vh", overflow: "scroll" }}
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
                  }}
                  transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  strokeLinejoin="bevel"
                  strokeLinecap="square"
                  className="text-body"
                  fontSize="100%"
                  fontFamily="Roboto"
                >
                  BLOG
                </motion.text>
              </motion.svg>
            </ContainerWrap>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              //   slidesPerView={2}
              slidesPerView={slides}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow]}
              style={{
                height: "auto",
                overflow: "scroll",
                transition: "all 0.5s ease",
              }}
              className="mySwiper"
            >
              {BlogData?.map((ls) => {
                return (
                  <SwiperSlide
                    className={slides == 1 ? "" : "textlink"}
                    style={{
                      backgroundColor: "#1b1b1b",
                      height: "auto",
                      width: "100vw",
                      transition: "all 0.5s ease",
                      overflow: "scroll",
                    }}
                    onClick={() =>
                      setSlides(slides == 1 ? (pageW < 600 ? 2 : 3) : 1)
                    }
                  >
                    <ContainerWrap>
                      <motion.div transition={{ duration: 2 }}>
                        <img style={{ margin: "0 auto" }} src={ls.img} />
                      </motion.div>
                      <div
                        className={classes.blog_heading}
                        style={{ padding: "calc(100%*0.05)" }}
                      >
                        <div
                          style={{
                            color: "lightgrey",
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "1.5rem",
                          }}
                          className={classes.title_blog}
                        >
                          {ls.title}
                        </div>
                        <div
                          style={{ color: "gray", letterSpacing: 0 }}
                          className={slides == 1 ? "" : "line-clamp-3"}
                        >
                          {ls.description}
                        </div>
                      </div>
                      {slides == 1 ? (
                        <div
                          style={{
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            marginBottom: "2rem",
                          }}
                        >
                          <Link
                            target="_blank"
                            className="textlink"
                            to={ls.article}
                          >
                            <Button style={{ width: "100%" }} variant="outline">
                              Read Full Article
                            </Button>
                          </Link>
                        </div>
                      ) : (
                        <></>
                      )}
                    </ContainerWrap>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide> */}
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </section>
    </Transition>
  );
}

export default Blog;

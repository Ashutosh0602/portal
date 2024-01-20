import blueGreen from "../../../assets/bluegreen.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { experienceHomeData } from "./ExperienceHomeData";
import classes from "./ExperienceHome.module.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ExperienceHome() {
  const sliderref = useRef<any>();
  useEffect(() => {
    sliderref.current?.swiper.autoplay.stop();
  }, []);

  return (
    <div
      onMouseOverCapture={() => sliderref.current.swiper.autoplay.start()}
      onMouseOut={() => sliderref.current.swiper.autoplay.stop()}
      className={classes.experience_card + " relative"}
      style={{ zIndex: 1 }}
    >
      <div
        className=" flex flex-col justify-between"
        style={{ height: "37vh" }}
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            textAlign: "start",
            color: "#A46D02",
          }}
        >
          EXPERIENCE
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            ref={sliderref}
            autoplay={{
              delay: 3, // Delay between transitions
              disableOnInteraction: true,
            }}
            freeMode={{
              enabled: true,
              minimumVelocity: 20,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {experienceHomeData.map((ls) => {
              return (
                <SwiperSlide>
                  <img
                    width="auto"
                    height="auto"
                    loading="eager"
                    src={ls.img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div style={{ textAlign: "end", marginBottom: "1rem" }}>
          <Link
            style={{
              marginRight: "2rem",
              color: "lightgray",
              borderBottom: "1px solid lightgray",
            }}
            className="textlink"
            to="/experience"
          >
            Experience
          </Link>
        </div>
      </div>
      <div className="absolute" style={{ top: 0, zIndex: -1 }}>
        <div>
          <img src={blueGreen} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "110vh",
          backgroundColor: "rgba(27,27,27,0.7)",
          top: 0,
          left: 0,
          zIndex: 6,
        }}
        className={classes.experience_cover}
      ></div>
    </div>
  );
}

export default ExperienceHome;

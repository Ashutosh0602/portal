import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { blogHomeData } from "./BlogHomedata";
import { useEffect, useRef } from "react";
import classes from "./BlogHome.module.css";
import redPurp from "../../../assets/redPurple.svg";

type blogDimension = {
  blogWidth: number;
  blogheight: number;
};

function BlogHome(props: any) {
  console.log(props);
  const swiperRef = useRef<any>();
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, []);
  return (
    <div
      onMouseOverCapture={() => swiperRef.current.swiper.autoplay.start()}
      onMouseOut={() => swiperRef.current.swiper.autoplay.stop()}
      className={classes.blog_card + " relative"}
      style={{ zIndex: 1 }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        ref={swiperRef}
        autoplay={{
          delay: 300, // Delay between transitions
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          minimumVelocity: 0.2,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative" style={{ height: "100%" }}>
          <div>
            <div className={classes.blog_heading}>BLOG</div>
            <div className={classes.blog_subheading}>
              <div>All you need for your next learning</div>
              <div>
                From frontend to backend and caching to database, everything got
                covered in the given aritcles.
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 0 }}>
            <img src={redPurp} />
          </div>
        </SwiperSlide>
        {blogHomeData.map((ls) => {
          return <SwiperSlide></SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default BlogHome;

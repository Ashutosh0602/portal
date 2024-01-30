import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { blogHomeData } from "./BlogHomedata";
import { useEffect, useRef } from "react";
import classes from "./BlogHome.module.css";
import redPurp from "../../../assets/redPurple.svg";

// type blogDimension = {
//   blogWidth: number;
//   blogheight: number;
// };

function BlogHome(props: any) {
  const swiperRef = useRef<any>();
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, []);
  return (
    <Link
      className="textlink"
      to="/blog"
      onMouseOutCapture={() => swiperRef.current.swiper.slideReset(1000)}
    >
      <div
        onMouseOverCapture={() => swiperRef.current.swiper.autoplay.start()}
        onMouseOut={() => {
          swiperRef.current.swiper.autoplay.stop();
          //   swiperRef.current.swiper.slideTo(0, 1000);
        }}
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
          style={{ width: props?.data[0], height: props?.data[1] }}
          //   className={classes.swiperBlog}
        >
          <SwiperSlide
            className={classes.swiperBlog + " relative"}
            style={{ height: "100%" }}
          >
            <div>
              <div className={classes.blog_heading}>BLOG</div>
              <div className={classes.blog_subheading}>
                <div>All you need for your next learning</div>
                <div>
                  From frontend to backend and caching to database, everything
                  got covered in the given aritcles.
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "-20%",
                zIndex: -1,
              }}
            >
              <img src={redPurp} />
            </div>
          </SwiperSlide>
          {blogHomeData.map((ls) => {
            return (
              <SwiperSlide
                style={{
                  maxWidth: props?.data[0],
                  maxHeight: props?.data[1],
                  objectFit: "fill",
                }}
              >
                <img
                  //   width="100%"
                  //   height="100%"
                  style={{
                    width: props?.data[0],
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={ls}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
          className={classes.blog_cover}
        ></div>
      </div>
    </Link>
  );
}

export default BlogHome;

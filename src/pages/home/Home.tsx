import { Link } from "react-router-dom";
import Transition from "../cursor/Transition";
import classes from "./Home.module.css";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import badgeAR from "../../assets/meLogo.png";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import homeSVG from "../../assets/homegrainy.svg";
// import roboto from "../../assets/robot.svg";
import { useEffect, useRef, useState } from "react";
// import { motion, useDragControls } from "framer-motion";
import Robot from "./robot/Robot";
import ProjectsHome from "./projectsHome/ProjectsHome";
import ExperienceHome from "./experienceHome/ExperienceHome";
import BlogHome from "./blogHome/BlogHome";
import ContainerWrap from "../cursor/ContainerWrap";

function Home() {
  const homeREF = useRef<DOMRect | null>(null);
  const blogREF = useRef<HTMLDivElement | null>(null);

  const [blogWidth, setblogWidth] = useState<number>();
  const [blogheight, setblogheight] = useState<number>();

  useEffect(() => {
    setblogWidth(blogREF.current?.clientWidth);
    setblogheight(blogREF.current?.clientHeight);
    console.log(blogREF.current?.clientWidth);
  }, []);

  function mouseLeave(content: DOMRect | any) {
    content.current = null;
  }

  function mouseEnter(content: DOMRect | any, ev: any) {
    content.current = ev.currentTarget.getBoundingClientRect();
  }

  function mouseMove(content: DOMRect | any, ev: any) {
    if (!content.current) return;
    const x = ev.clientX - content.current.left;
    const y = ev.clientY - content.current.top;
    const xPercentage = x / content.current.width;
    const yPercentage = y / content.current.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
    ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
    ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
    ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
  }

  //   type blogDimension = {
  //     blogWidth: number;
  //     blogheight: number;
  //   };

  return (
    <Transition>
      <section className={classes.homeSection + " [perspective:5000px]"}>
        <div
          onMouseLeave={() => mouseLeave(homeREF)}
          onMouseEnter={(ev) => mouseEnter(homeREF, ev)}
          onMouseMove={(ev) => mouseMove(homeREF, ev)}
          className={
            classes.home_main +
            " relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
          }
        >
          <ContainerWrap>
            <div
              className="flex flex-col justify-between w-full h-full absolute pb-6"
              style={{ zIndex: 1 }}
            >
              <div>
                <div>I’m a</div>
                <div>disciplined-DEVELOPER</div>
                <div>
                  Writing Code to solve a solution — using coding language just
                  as a tool
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <div>
                    <Link className="textlink" to="/">
                      <Badge
                        className="textlink"
                        style={{
                          padding: 0,
                          fontFamily: "Roboto",
                          backgroundColor: "#121212",
                          paddingRight: "0.5rem",
                        }}
                      >
                        <Avatar
                          style={{
                            backgroundColor: "#121212",
                            border: "1px solid gray",
                            marginRight: "0.4rem",
                          }}
                        >
                          <AvatarImage src={badgeAR} alt="Ashutosh Rai" />
                          <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        Ashutosh Rai
                      </Badge>
                    </Link>
                  </div>
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger style={{ padding: 0, margin: 0 }}>
                          <Link
                            target="_blank"
                            className="textlink"
                            to="https://rb.gy/028xr0"
                          >
                            <IoNewspaperOutline
                              style={{
                                width: "1.5rem",
                                transform: "translateY(30%)",
                                marginLeft: "1rem",
                                //   fill: "gray",
                                color: "gray",
                              }}
                            />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          style={{
                            transform: "translateY(200%)",
                            borderRadius: 0,
                            padding: 0,
                          }}
                        >
                          <p style={{ fontSize: "0.8rem", color: "black" }}>
                            Resume
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger style={{ padding: 0, margin: 0 }}>
                          <Link
                            target="_blank"
                            className="textlink"
                            to="https://www.linkedin.com/in/ashutosh-rai-b75aa622a/"
                          >
                            <CiLinkedin
                              style={{
                                width: "1.5rem",
                                transform: "translateY(30%)",
                                marginLeft: "1rem",
                              }}
                            />
                          </Link>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger style={{ padding: 0, margin: 0 }}>
                          <Link
                            target="_blank"
                            className="textlink"
                            to="https://github.com/Ashutosh0602"
                          >
                            <FaGithub
                              style={{
                                width: "1.5rem",
                                transform: "translateY(30%)",
                                marginLeft: "1rem",
                              }}
                            />
                          </Link>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    transform: "translateY(12%)",
                    // width:
                  }}
                >
                  <Link
                    style={{
                      borderBottom: "1px solid gray",
                      marginRight: "2rem",
                    }}
                    className="textlink"
                    to="/about"
                  >
                    About me
                  </Link>
                  <Link
                    className="textlink"
                    style={{
                      borderBottom: "1px solid gray",
                      marginRight: "2rem",
                    }}
                    to="/contact"
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="absolute"
              style={{ top: "-10rem", right: "-10rem" }}
            >
              <img src={homeSVG} style={{ width: "40rem" }} />
            </div>
          </ContainerWrap>
        </div>
        <div
          onMouseLeave={() => mouseLeave(homeREF)}
          onMouseEnter={(ev) => mouseEnter(homeREF, ev)}
          onMouseMove={(ev) => mouseMove(homeREF, ev)}
          className={
            classes.home_robot +
            " relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
          }
        >
          <ContainerWrap>
            <Robot />
          </ContainerWrap>
        </div>

        <div
          onMouseLeave={() => mouseLeave(homeREF)}
          onMouseEnter={(ev) => mouseEnter(homeREF, ev)}
          onMouseMove={(ev) => mouseMove(homeREF, ev)}
          ref={blogREF}
          className={
            classes.home_blog +
            " relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
          }
        >
          {" "}
          <ContainerWrap>
            <BlogHome data={[blogWidth, blogheight]} />{" "}
          </ContainerWrap>
        </div>
        <div
          onMouseLeave={() => mouseLeave(homeREF)}
          onMouseEnter={(ev) => mouseEnter(homeREF, ev)}
          onMouseMove={(ev) => mouseMove(homeREF, ev)}
          className={
            classes.home_projects +
            " transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
          }
        >
          {" "}
          <ContainerWrap>
            <ProjectsHome />{" "}
          </ContainerWrap>
        </div>
        <div
          onMouseLeave={() => mouseLeave(homeREF)}
          onMouseEnter={(ev) => mouseEnter(homeREF, ev)}
          onMouseMove={(ev) => mouseMove(homeREF, ev)}
          className={
            classes.home_experience +
            " relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
          }
        >
          {" "}
          <ContainerWrap>
            <ExperienceHome />{" "}
          </ContainerWrap>
        </div>
      </section>
    </Transition>
  );
}

export default Home;

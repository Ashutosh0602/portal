import { motion } from "framer-motion";
import classes from "./AboutSec.module.css";
import Transition from "../cursor/Transition";
import { aboutTech, aboutLink } from "./aboutData";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";
import ContainerWrap from "../cursor/ContainerWrap";
import { Link } from "react-router-dom";

const staggerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function About() {
  const techREF = useRef<any>();
  // const isInView = useInView(techREF, { once: true, amount: 0 });

  const techBox = {
    techAnimate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 2 * index },
    }),
  };

  return (
    <Transition>
      <section className={classes.aboutSection + " pb-16"}>
        <motion.div
          initial={{ width: "100vw" }}
          animate={{ width: "50vw", transition: { delay: 3, duration: 2 } }}
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
                  fill: "none",
                  strokeWidth: 0.1,
                  stroke: "white",
                }}
                animate={{
                  strokeDashoffset: "-50%",
                  strokeDasharray: "32% 0",
                  strokeWidth: 0.5,
                  stroke: "white",
                  // transition: { delay: 2 },
                  // fill: "white",
                }}
                transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="black"
                strokeLinejoin="bevel"
                strokeLinecap="square"
                className="text-body"
                fontSize="100%"
                fontFamily="Roboto"
                // fill="white"
              >
                About Me
              </motion.text>
            </motion.svg>
          </ContainerWrap>
        </motion.div>
        <div>
          <motion.div
            className="grid gap-2 lg:grid-cols-6 md:grid-cols-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3, staggerChildren: 0.3 },
            }}
          >
            {aboutTech.map((ls, index) => {
              return (
                <motion.div
                  className="col-span-2"
                  variants={techBox}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView="techAnimate"
                  // (index:number)=>({
                  //   opacity: 1,
                  //   y: 0,
                  //   transition: { delay: 0.05, duration: 0.6 },
                  // })
                  viewport={{ once: true }}
                >
                  <ContainerWrap>
                    <Card
                      key={index}
                      className={classes.tech_card + " flex items-center"}
                      ref={techREF}
                      style={{
                        backgroundColor: "transparent",
                        marginBottom: "0.5rem",
                        border: "2px solid #1B1B1B",
                        padding: "1rem",
                        paddingTop: "0rem",
                        paddingBottom: "0rem",
                        //   opacity: isInView ? 1 : 0,
                        //   transform: isInView
                        //     ? "translateY(0px)"
                        //     : "translateY(50px)",
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
                            {ls.techDesc}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </Card>
                  </ContainerWrap>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerVariants}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
          className="flex flex-wrap gap-5 justify-evenly mt-16"
        >
          {aboutLink.map((ls) => {
            return (
              <motion.div variants={staggerVariants}>
                <ContainerWrap>
                  <Card>
                    <CardHeader
                      style={{
                        paddingTop: "0.5rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                      }}
                    >
                      <img
                        className="lg:w-8"
                        src={ls.techImg}
                        style={{ width: "12rem", margin: "0 auto" }}
                      />
                    </CardHeader>
                    <CardFooter style={{}}>
                      <Link
                        target="_blank"
                        className="textlink"
                        to={ls.accountLink}
                      >
                        <div
                          style={{
                            letterSpacing: 0,
                            fontSize: "1.5rem",
                            fontWeight: 700,
                          }}
                        >
                          {ls.Account}
                        </div>
                        <p
                          className="line-clamp-1"
                          style={{ fontSize: "0.8rem", letterSpacing: 0 }}
                        >
                          {ls.textLink}
                        </p>
                      </Link>
                    </CardFooter>
                  </Card>
                </ContainerWrap>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </Transition>
  );
}

export default About;

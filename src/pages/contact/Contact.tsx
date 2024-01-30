import { useEffect, useRef, useState } from "react";
import classes from "./Contact.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Transition from "../cursor/Transition";
import { Link } from "react-router-dom";

function Contact() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  return (
    <>
      <section className={classes.contact_section}>
        <div ref={scrollRef} className={classes.contact_scroll_container}>
          <motion.div
            className={
              classes.contact_mb +
              " fixed h-screen flex items-center overflow-hidden"
            }
            style={{
              // position: "sticky",
              top: "3%",
              x,
              color: "gray",
              fontSize: "8rem",
              width: "500vw",
            }}
          >
            Interested to know more about me? Reach to me via Email. Follow me
            on Linkedin, Twitter, Github and Medium
          </motion.div>

          <div
            style={{
              position: "sticky",
              bottom: 0,
              color: "gray",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            Scroll Down ↓
          </div>
        </div>
      </section>
      <Transition>
        <section style={{ backgroundColor: "#111111" }}>
          <div
            className={classes.mb_contact_real}
            style={{ color: "gray", fontSize: "5rem" }}
          >
            Interested to know more about me? <br></br> Reach to me via{" "}
            <Link
              type="email"
              to="mailto:ashujn2del@gmail.com"
              className="textlink"
              style={{ color: "whitesmoke" }}
            >
              Email
            </Link>
            .{/* . <br></br> */}
            <br></br>Follow me on
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/ashutosh-rai-b75aa622a/"
              className="textlink"
              style={{ color: "whitesmoke" }}
            >
              {" "}
              Linkedin
            </Link>
            ,{" "}
            <Link
              target="_blank"
              to="https://twitter.com/ashu_rai_06"
              className="textlink"
              style={{ color: "whitesmoke" }}
            >
              Twitter
            </Link>
            ,{" "}
            <Link
              target="_blank"
              to="https://github.com/Ashutosh0602/"
              className="textlink"
              style={{ color: "whitesmoke" }}
            >
              Github{" "}
            </Link>
            and{" "}
            <Link
              target="_blank"
              to="https://medium.com/@ashujn2del"
              className="textlink"
              style={{ color: "whitesmoke" }}
            >
              Medium
            </Link>
            🫡
          </div>
          <div
            style={{ backgroundColor: "#1b1b1b", border: "1px solid #1b1b1b" }}
          >
            {/* <input /> */}
          </div>
        </section>
      </Transition>
    </>
  );
}

export default Contact;

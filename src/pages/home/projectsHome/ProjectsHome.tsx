import { Link } from "react-router-dom";
import classes from "./projectsHome.module.css";
import { projectHomeData } from "./projectsHomeData";
import { useRef, useState } from "react";

function ProjectsHome() {
  const projectREF = useRef<any>();
  const [X, setX] = useState(15);
  //   const [Y, setY] = useState(100);

  const mid = projectHomeData.length / 2;
  const ImgGrid = () =>
    projectHomeData.map((ls, index) => {
      if (index < mid) {
        return (
          <div style={{ width: "5rem", margin: "0.5rem" }}>
            <img src={ls.img} loading="eager" width="auto" height="auto" />
          </div>
        );
      }
    });

  const AnoImgGrid = () =>
    projectHomeData.map((ls, index) => {
      if (index > mid) {
        return (
          <div style={{ width: "5rem", margin: "0.5rem" }}>
            <img src={ls.img} loading="eager" width="auto" height="auto" />
          </div>
        );
      }
    });

  return (
    <Link className="textlink" to="/project">
      <div
        ref={projectREF}
        className={classes.projectCard}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "auto",
        }}
        onMouseMove={(e) => {
          setX((e.pageX - projectREF.current.getBoundingClientRect().x) / 10);
          // setY((e.pageY - projectREF.current.getBoundingClientRect().y) / 10);
        }}
        // onMouseEnter={(e) => console.log(e.target.}
      >
        <div>
          <div
            style={{
              position: "absolute",
              left: `-${X}%`,
              //   bottom: `-${Y}%`,
              columns: 6,
              columnGap: 0,
              columnFill: "balance-all",
            }}
          >
            <ImgGrid />
            <AnoImgGrid />
          </div>
          <div
            style={{
              position: "absolute",
              top: "11rem",
              //   left: "50%",
              textAlign: "center",
              backgroundColor: "#1b1b1b",
              fontSize: "4rem",
              fontWeight: 800,
              color: "#A46D02",
              width: "100%",
            }}
          >
            PROJECT
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
          className={classes.project_cover}
        ></div>
      </div>
    </Link>
  );
}

export default ProjectsHome;

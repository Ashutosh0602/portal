import { Link } from "react-router-dom";
import classes from "./projectsHome.module.css";
import { projectHomeData } from "./projectsHomeData";

function ProjectsHome() {
  const ImgGrid = () =>
    projectHomeData.map((ls) => {
      return (
        <div style={{ width: "5rem", margin: "0.2rem" }}>
          <img src={ls.img} loading="eager" width="auto" height="auto" />
        </div>
      );
    });

  return (
    <div
      className={classes.projectCard}
      style={{ position: "relative", zIndex: 1, width: "100%", height: "auto" }}
    >
      <div
        className="absolute"
        style={{
          backgroundColor: "rgba(27,27,27,0.2)",
          zIndex: 2,
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className={classes.projectHeading}
          //   style={{ backgroundColor: "black" }}
        >
          PROJECT
        </div>
        <div className="absolute" style={{ top: "45%" }}>
          <Link className="textlink" to="/project">
            Projects
          </Link>
        </div>
      </div>
      <div
        className={classes.imgGridTemp + " absolute"}
        style={{
          //   bottom: "10%",
          left: "-50%",
          //   transform: "translate(-50% -50%)",
          zIndex: 0,
        }}
      >
        <ImgGrid />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "110vh",
          //   backgroundColor: "black",
          backgroundColor: "rgba(27,27,27,0.7)",
          top: 0,
          left: 0,
          zIndex: 6,
        }}
        className={classes.project_cover}
      ></div>
    </div>
  );
}

export default ProjectsHome;

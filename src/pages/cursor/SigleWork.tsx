import "../styles/ComponentStyles/SingleWork.css";
import ImageReveal from "./ImageReveal.js";
import TextTransition from "./TextTransition";
import ArrowSmall from "./ArrowSmall.js";
import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize.js";
import { deviceLayout } from "../utilites/Constant";

const SingleWork = ({
  imageSource,
  textColor,
  title,
  description,
  link,
}: any) => {
  const { screenSize } = useResize();

  return (
    <Link to={link} className="textlink single-work-container center-column">
      <ImageReveal width="100%" height="auto" imageSource={imageSource} />
      <p
        style={{ color: textColor, fontWeight: "bold" }}
        className="single-work-about font-small-brooklyn"
      >
        {description}
      </p>
      <div style={{ width: "100%" }} className=" single-work-link">
        <TextTransition
          text={title}
          size={
            screenSize.width <= deviceLayout.responsivePreview.Mobile[0]
              ? 1
              : screenSize.width <= deviceLayout.responsivePreview.Tablet[0]
              ? 2
              : 3
          }
          transitionDelay={0}
          overlayDivColor={textColor}
          style={{
            color: textColor,
            marginBottom:
              screenSize.width <= deviceLayout.responsivePreview.Mobile[0]
                ? "2rem"
                : "",
          }}
        />
        <div
          className="arrow-background"
          style={{
            backgroundColor: textColor,
          }}
        >
          <ArrowSmall width="20" height="20" />
        </div>
      </div>
    </Link>
  );
};

export default SingleWork;

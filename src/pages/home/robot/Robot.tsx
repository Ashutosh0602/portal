import roboto from "../../assets/robot.svg";
import { motion, useDragControls } from "framer-motion";
import classes from "../Home.module.css";
import { useRef } from "react";

function Robot() {
  const eye = useRef<SVGPathElement | null>(null);

  const controls = useDragControls();
  function startDrag(event: any) {
    // console.log(event);
    controls.start(event);
  }

  return (
    <div style={{ position: "relative" }}>
      {/* <img style={{ margin: "0 auto" }} src={roboto} /> */}
      <svg
        width="305"
        height="326"
        viewBox="0 0 305 326"
        fill="none"
        style={{ margin: "0 auto" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M152.591 325.333C228.524 325.333 290.08 320.598 290.08 314.757C290.08 308.916 228.524 304.181 152.591 304.181C76.6574 304.181 15.1014 308.916 15.1014 314.757C15.1014 320.598 76.6574 325.333 152.591 325.333Z"
          fill="#45413C"
        />
        <path
          d="M279.504 279.504C279.504 295.015 266.812 307.707 251.301 307.707H53.8805C38.3689 307.707 25.6776 295.015 25.6776 279.504V184.319C25.6776 114.517 82.7884 57.4059 152.591 57.4059C222.393 57.4059 279.504 114.517 279.504 184.319V279.504Z"
          fill="#DAEDF7"
        />
        <path
          d="M152.591 57.4059C82.7884 57.4059 25.6776 114.517 25.6776 184.319V219.573C25.6776 149.77 82.7884 92.6595 152.591 92.6595C222.393 92.6595 279.504 149.77 279.504 219.573V184.319C279.504 114.517 222.393 57.4059 152.591 57.4059Z"
          fill="white"
        />
        <path
          d="M279.504 279.504C279.504 295.015 266.812 307.707 251.301 307.707H53.8805C38.3689 307.707 25.6776 295.015 25.6776 279.504V184.319C25.6776 114.517 82.7884 57.4059 152.591 57.4059C222.393 57.4059 279.504 114.517 279.504 184.319V279.504Z"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M198.42 304.181C198.42 311.937 192.075 318.283 184.319 318.283H120.862C113.107 318.283 106.761 311.937 106.761 304.181V247.775C106.761 240.02 113.107 233.674 120.862 233.674H184.319C192.075 233.674 198.42 240.02 198.42 247.775V304.181Z"
          fill="#C0DCEB"
        />
        <path
          d="M106.761 265.402H198.42V279.504H106.761V265.402Z"
          fill="#ADC4D9"
        />
        <path
          d="M304.181 251.301L279.504 265.402V177.268L304.181 191.37V251.301Z"
          fill="#ADC4D9"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 251.301L25.6775 265.402V177.268L1 191.37V251.301Z"
          fill="#ADC4D9"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M152.591 57.4059C154.001 50.3551 170.217 1.00005 226.623 10.166"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M237.199 36.2536C246.934 36.2536 254.826 28.3618 254.826 18.6268C254.826 8.89179 246.934 1 237.199 1C227.464 1 219.573 8.89179 219.573 18.6268C219.573 28.3618 227.464 36.2536 237.199 36.2536Z"
          fill="#FF6242"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M198.42 304.181C198.42 311.937 192.075 318.283 184.319 318.283H120.862C113.107 318.283 106.761 311.937 106.761 304.181V247.775C106.761 240.02 113.107 233.674 120.862 233.674H184.319C192.075 233.674 198.42 240.02 198.42 247.775V304.181Z"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M198.42 265.402H106.761V247.775C106.761 240.02 113.107 233.674 120.862 233.674H184.319C192.075 233.674 198.42 240.02 198.42 247.775V265.402Z"
          fill="#FF6242"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M219.572 77.1479C199.83 65.1617 177.268 57.4059 152.591 57.4059C127.913 57.4059 105.351 64.4566 85.6087 76.4428V163.167H219.572V77.1479Z"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M212.522 205.471C231.992 205.471 247.775 189.687 247.775 170.217C247.775 150.747 231.992 134.964 212.522 134.964C193.052 134.964 177.268 150.747 177.268 170.217C177.268 189.687 193.052 205.471 212.522 205.471Z"
          fill="#00DFEB"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          onHoverStart={startDrag}
          ref={eye}
          drag
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          d="M212.522 184.319C220.31 184.319 226.623 178.005 226.623 170.217C226.623 162.429 220.31 156.116 212.522 156.116C204.734 156.116 198.42 162.429 198.42 170.217C198.42 178.005 204.734 184.319 212.522 184.319Z"
          fill="#627B8C"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M92.6594 205.471C112.129 205.471 127.913 189.687 127.913 170.217C127.913 150.747 112.129 134.964 92.6594 134.964C73.1894 134.964 57.4058 150.747 57.4058 170.217C57.4058 189.687 73.1894 205.471 92.6594 205.471Z"
          fill="#00DFEB"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          onHoverStart={startDrag}
          ref={eye}
          drag
          dragTransition={{ bounceStiffness: 1000, power: 0.8 }}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          d="M92.6594 184.319C100.447 184.319 106.761 178.005 106.761 170.217C106.761 162.429 100.447 156.116 92.6594 156.116C84.8714 156.116 78.558 162.429 78.558 170.217C78.558 178.005 84.8714 184.319 92.6594 184.319Z"
          fill="#627B8C"
          stroke="#45413C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "110%",
          backgroundColor: "rgba(27,27,27,0.5)",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
        className={classes.robot_cover}
      ></div>
    </div>
  );
}

export default Robot;

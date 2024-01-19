import { useState, useEffect } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const router = useLocation();
  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [router]);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll(".textlink").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e: any) => {
    setHidden(false);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  });
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== "undefined" && isMobile()) return null;
  return (
    <div
      className={`${cursorClasses} center`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {linkHovered && (
        <div className="cursor-text">
          <svg
            width="10"
            height="10"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 72L72 1M72 1H1M72 1V72"
              stroke="black"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Cursor;

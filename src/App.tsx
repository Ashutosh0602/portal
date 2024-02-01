import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";

// import Home from "./pages/home/Home";
const Home = lazy(() => import("./pages/home/Home"));

// import Blog from "./pages/blog/Blog";
const Blog = lazy(() => import("./pages/blog/Blog"));

// import Experience from "./pages/experience/Experience";
const Experience = lazy(() => import("./pages/experience/Experience"));

// import Project from "./pages/project/Project";
const Project = lazy(() => import("./pages/project/Project"));

// import ProjectDetail from "./pages/projectDetail/ProjectDetail";
const ProjectDetail = lazy(() => import("./pages/projectDetail/ProjectDetail"));

// import Contact from "./pages/contact/Contact";
const Contact = lazy(() => import("./pages/contact/Contact"));

// import About from "./pages/about/About";
const About = lazy(() => import("./pages/about/About"));

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path="projectDetail" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          {/* <Home /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

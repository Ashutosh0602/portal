import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Experience from "./pages/experience/Experience";
import Project from "./pages/project/Project";
import { AnimatePresence } from "framer-motion";
import ProjectDetail from "./pages/projectDetail/ProjectDetail";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectDetail" element={<ProjectDetail />} />
          {/* <Home /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

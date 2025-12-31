// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import SkillDetail from "./pages/SkillDetail";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

// Home page component with all sections
const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16" />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Ashish B.K.</h6>
        <p>Sushantprojects@all rights reserved 2025</p>
      </footer>
    </>
  );
};

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill/:skillId" element={<SkillDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

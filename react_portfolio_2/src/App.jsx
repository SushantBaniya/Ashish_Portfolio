// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import SkillDetail from "./pages/SkillDetail";
import EventDetail from "./pages/EventDetail";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Ashish B.K.</h6>
        <p>AshishBk@all rights reserved 2026</p>
      </footer>
    </>
  );
};

const ScrollToTopAndAosRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.refresh();
  }, [location.pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      // Removed disable: "mobile" to ensure AOS manages elements on mobile properly
    });
  }, []);
  
  return (
    <Router>
      <ScrollToTopAndAosRefresh />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill/:skillId" element={<SkillDetail />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

import Home from './screens/Home';
import Project from './screens/Project';
import PageNotFound from './screens/404';
import MyProjects from './screens/MyProjects';
import Aboutme from './screens/Aboutme';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Topbutton from './components/elements/Topbutton';
import Contact from './components/Contact';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

const App = () => {
  const [showTopUp, setShowTopUp] = useState(false);
  const refScrollUp = useRef();

  const handleVisibleTopUp = () => {
    setShowTopUp(window.scrollY > 100);
  };

  const handleScrollUp = () => {
    refScrollUp.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleTopUp);
    return () => window.removeEventListener("scroll", handleVisibleTopUp);
  }, []);

  return (
      <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <Router>
          <Wrapper>
            <Navbar />
            <div className="container mx-auto px-6 lg:px-20 pt-[80px] md:pt-0" ref={refScrollUp}>
              <Topbutton showTopUp={showTopUp} scrollUp={handleScrollUp} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/portfolio" element={<MyProjects />} />
                <Route path="/aboutme" element={<Aboutme />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
              <Contact />
              <Footer />
            </div>
          </Wrapper>
        </Router>
      </div>
  );
};

export default App;

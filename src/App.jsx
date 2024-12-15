import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './screens/Home';
import Project from './screens/Project';
import PageNotFound from './screens/404';

import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Topbutton from './components/elements/Topbutton';

import Contact from './components/Contact';


import { useEffect, useRef, useState } from 'react';


const App = () => {
  const [showTopUp, setShowTopUp] = useState(false);
  const refScrollUp = useRef();

  const handleVisibleTopUp = () => {
    if (window.scrollY > 100) {
      setShowTopUp(true);
    } else {
      setShowTopUp(false);
    }
  };

  const handleScrollUp = () => {
    if (refScrollUp.current) {
      refScrollUp.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleTopUp);
    return () => window.removeEventListener("scroll", handleVisibleTopUp);
  }, []);

  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <Router>
        <div className='container mx-auto px-6 lg:px-20' ref={refScrollUp}>
          <Navbar />
          <Topbutton
            showTopUp={showTopUp}
            scrollUp={handleScrollUp}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to={"/404"} replace />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </Router>
  </div>
  )
}

export default App

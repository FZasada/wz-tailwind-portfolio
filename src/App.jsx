import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Home from './screens/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <Router>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </Router>
  </div>
  )
}

export default App

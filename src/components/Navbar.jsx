import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import ContactButton from './elements/ContactButton';

import logo from '../assets/logo.png';
import burgerMenu from '../assets/icons/burger_menu.png';
import enveloper_r from '../assets/icons/enveloper_r.png';
import { EMAIL } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const contact = () => {
    console.log("Contacting ", EMAIL);
    window.location.href = `mailto:${EMAIL}`;
  };

  useEffect(() => {
    // Disable scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when menu is closed
    }

    // Cleanup to ensure we reset the style when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="mb-12 lg:mb-4 items-center py-3 max-w-screen-xl flex flex-wrap gap-12 justify-between mx-auto">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10 lg:w-16" src={logo} alt="FZ" />
      </div>

      {/* Burger menu button (only visible on small screens) */}
      <div className="space-x-2">
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen ? 'true' : 'false'} 
          onClick={contact}
        >
          <span className="sr-only">Contact</span>
          <img src={enveloper_r} alt="Contact" className="w-40" />
        </button>
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen ? 'true' : 'false'} 
          onClick={toggleMenu} // Toggle the menu visibility
        >
          <span className="sr-only">Open main menu</span>
          <img src={burgerMenu} alt="Burger Menu" className="w-40" />
        </button>
      </div>

      {/* Full-screen Mobile Menu (Overlay) */}
      <div 
        className={`fixed inset-0 bg-primary z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`} 
        id="navbar-default"
      >
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-white text-4xl" 
          onClick={toggleMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Centered Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full text-white text-xl space-y-12">
          <NavLink
            onClick={closeMenu} // Close the menu when clicked
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-extrabold border-b-2 border-b-white'
                : 'text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={closeMenu} // Close the menu when clicked
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-extrabold border-b-2 border-b-white'
                : 'text-white'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={closeMenu} // Close the menu when clicked
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-extrabold border-b-2 border-b-white'
                : 'text-white'
            }
          >
            About me
          </NavLink>
        </div>

        {/* Optional: Add a contact button at the bottom */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <ContactButton onClick={closeMenu} />
        </div>
      </div>

      {/* Desktop/Tablet Navigation Menu (visible on medium and larger screens) */}
      <div className="hidden md:flex flex-1 justify-between items-center">
        <ul className="flex flex-row gap-8 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-b-primary transition-all duration-200 ease-in-out font-extrabold'
                : 'text-gray-700 hover:text-primary transition-all duration-200 ease-in-out'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-b-primary transition-all duration-200 ease-in-out font-extrabold'
                : 'text-gray-700 hover:text-primary transition-all duration-200 ease-in-out'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-b-primary transition-all duration-200 ease-in-out font-extrabold'
                : 'text-gray-700 hover:text-primary transition-all duration-200 ease-in-out'
            }
          >
            About me
          </NavLink>
        </ul>

        <ContactButton />
      </div>
    </nav>
  );
};

export default Navbar;

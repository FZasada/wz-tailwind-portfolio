import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import Button from './elements/Button';

const Navbar = () => {
  return (
    <nav className="mb-4 items-center py-6 max-w-screen-xl flex flex-wrap gap-12 justify-between mx-auto">
        <div className="flex flex-shrink-0 items-center">
            <img className="w-12 lg:w-16" src={logo} alt="FZ" />
        </div>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div className="hidden w-full md:flex md flex-1 md:justify-between md:items-center md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
                >
                    About me
                </NavLink>
            </ul>
            
            <Button text="Contact me" icon={'src/assets/icons/envelope_w.png'}/>
        </div>
    </nav>

  )
}

export default Navbar

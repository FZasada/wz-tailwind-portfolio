import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex justify-between py-8 text-base lg:text-xl'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
            <NavLink
                to="/" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
                Home
            </NavLink>
            <NavLink 
                to="/portfolio" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
                Portfolio
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
                About me
            </NavLink>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <NavLink 
                to="https://www.instagram.com/wiktoria_designwork/" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                target='_blank'
            >
                Instagram
            </NavLink>
            <NavLink 
                to="https://www.linkedin.com/in/wiktoria-zemla-00a20b252/" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                target='_blank'
            >
                LinkedIn
            </NavLink>
        </div>
    </footer>
  )
}

export default Footer

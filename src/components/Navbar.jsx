import { useState } from 'react';
import logo from '../assets/better-health-high-resolution-logo-transparent.png';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ links }) => {

const [menuOpen, setMenuOpen] = useState(false);

return (
<>
    <nav className="container mx-auto px-16 py-3  bg-lime-50 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-6 text-lg font-bold pr-6">
          {links.map((link, index) => (
            <a key={index} href={link.href} id={link.href} className="text-slate-500 hover:text-lime-500">
              {link.text}
            </a>
          ))}
        </div>
        <div className="md:hidden">
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-500 hover:text-lime-500 focus:outline-none"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-lg font-bold">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="block text-slate-500 hover:text-lime-500">
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
</>
);
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-indigo-950 text-white px-19 py-10 flex justify-between items-center relative">
      {/* Logo */}
      <NavLink to="/home" className="text-2xl font-bold capitalize uppercase">
        Start Framework
      </NavLink>

      {/* Hamburger Icon (mobile only) */}
      <div className="lg:hidden ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col uppercase lg:flex-row absolute lg:static font-bold bg-indigo-950 w-full left-0 lg:w-auto top-full lg:top-auto lg:flex items-center transition-all duration-300 gap-4 text-lg px-4 py-3 lg:py-0 z-50 
          ${menuOpen ? 'flex' : 'hidden lg:flex'}`}
      >
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-300 
              ${isActive ? 'bg-emerald-400 text-white' : 'hover:bg-emerald-400 hover:text-white'}`
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-300 
              ${isActive ? 'bg-emerald-400 text-white' : 'hover:bg-emerald-400 hover:text-white'}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-300 
              ${isActive ? 'bg-emerald-400 text-white' : 'hover:bg-emerald-400 hover:text-white'}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

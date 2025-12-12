import React, { useState } from "react";
import logo from "../assets/logo.png"; 

// Ganti 'export const Navbar = () =>' jadi 'export function Navbar()'
// Biar sinkron sama App.jsx yang manggil { Navbar }
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 font-sans">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <img src={logo} alt="Logo" className="h-8 md:h-10" />

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Program</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Project</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Testimonial</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>

        {/* TOMBOL HAMBURGER */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 focus:outline-none p-2"
          >
            {isOpen ? (
              <span className="text-2xl font-bold">✕</span>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div 
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 transition-all duration-300 ease-in-out md:hidden shadow-xl`}
      >
        <ul className="flex flex-col gap-6 text-base font-bold text-gray-700">
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">Program</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">Project</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">Testimonial</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
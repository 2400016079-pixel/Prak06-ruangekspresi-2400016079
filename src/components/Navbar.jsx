import React, { useState } from "react";
import logo from "../assets/logo.png"; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll otomatis dan menutup menu mobile
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 font-sans">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO: Dibuat lebih kuat untuk menghindari gepeng */}
        <a href="#home" onClick={() => handleScroll('home')}>
          <img 
            src={logo} 
            alt="Logo Ruang Ekspresi" 
            className="h-10 w-auto object-contain" // <-- Ganti h-8 md:h-10 menjadi h-10 w-auto object-contain
          />
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          <li className="hover:text-blue-600 transition">
            <a href="#home" onClick={() => handleScroll('home')}>Home</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#about" onClick={() => handleScroll('about')}>About</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#Program" onClick={() => handleScroll('Program')}>Program</a> {/* <--- KOREKSI: 'Program' (P besar) menjadi 'program' (p kecil) */}
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#project" onClick={() => handleScroll('project')}>Project</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#testimonial" onClick={() => handleScroll('testimonial')}>Testimonial</a>
          </li>
          <li className="hover:text-blue-600 transition">
            <a href="#contact" onClick={() => handleScroll('contact')}>Contact</a>
          </li>
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

      {/* MENU MOBILE (TIDAK ADA PERUBAHAN ID KARENA SUDAH BENAR) */}
      <div 
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 transition-all duration-300 ease-in-out md:hidden shadow-xl`}
      >
        <ul className="flex flex-col gap-6 text-base font-bold text-gray-700">
          <li><a href="#home" onClick={() => handleScroll('home')} className="hover:text-blue-600 block">Home</a></li>
          <li><a href="#about" onClick={() => handleScroll('about')} className="hover:text-blue-600 block">About</a></li>
          <li><a href="#program" onClick={() => handleScroll('program')} className="hover:text-blue-600 block">Program</a></li>
          <li><a href="#project" onClick={() => handleScroll('project')} className="hover:text-blue-600 block">Project</a></li>
          <li><a href="#testimonial" onClick={() => handleScroll('testimonial')} className="hover:text-blue-600 block">Testimonial</a></li>
          <li><a href="#contact" onClick={() => handleScroll('contact')} className="hover:text-blue-600 block">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
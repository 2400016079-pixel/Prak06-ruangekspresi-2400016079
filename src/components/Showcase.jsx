import React from "react";
// Ganti 'showcase-frame.png' dengan nama file hasil export frame kamu dari Figma
import showcaseFrame from "../assets/Frame 4 (1).png"; 

export function Showcase() {
  return (
    // TAMBAHKAN id="project" DI SINI agar Navbar bisa scroll
    <section 
        id="project" 
        className="w-full pt-16 pb-24 bg-[#FFF8F8] flex justify-center overflow-hidden font-sans"
    >
      
      {/* Container utama */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        
        {/* JUDUL SECTION BARU */}
        <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Showcase <span className="text-[#1864AB]">Student Projects</span>
            </h2>
            <p className="text-gray-600 text-lg">
                Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
            </p>
        </div>
        
        {/* Gambar Frame Showcase Utuh (Hasil Export Figma) */}
        {/* Tambahkan shadow-xl agar lebih menonjol */}
        <img 
          src={showcaseFrame} 
          alt="Showcase Student Projects" 
          className="w-full h-auto object-contain shadow-xl" 
        />
        
      </div>
    </section>
  );
}
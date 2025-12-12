import React from "react";
// Ganti 'showcase-frame.png' dengan nama file hasil export frame kamu dari Figma
// Pastikan ekspornya 2x atau 3x biar gambar di web tetep tajam
import showcaseFrame from "../assets/Frame 4 (1).png"; 

export function Showcase() {
  return (
    // bg-[#FFF8F8] disesuaikan dengan warna background section showcase kamu
    <section className="w-full py-16 bg-[#FFF8F8] flex justify-center overflow-hidden">
      
      {/* Container utama agar lebarnya sama simetris dengan Hero/Pillars/Schedule */}
      <div className="max-w-7xl w-full mx-auto px-4 flex justify-center">
        
        {/* Gambar Frame Showcase Utuh (Hasil Export Figma) */}
        <img 
          src={showcaseFrame} 
          alt="Showcase Student Projects" 
          className="w-full h-auto object-contain shadow-sm" 
        />
        
      </div>
    </section>
  );
}
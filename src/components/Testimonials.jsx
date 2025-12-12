import React from "react";
// Import kedua frame hasil ekspor kamu
import testiFrame1 from "../assets/testi-1.svg"; 
import testiFrame2 from "../assets/testi-2.svg"; 

export function Testimonials() {
  return (
    // Section utama
    <section className="w-full py-10 bg-white flex justify-center overflow-hidden">
      {/* Container supaya lebar gambarnya sinkron sama konten atasnya */}
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* FRAME PERTAMA (Baris Atas) */}
        <img 
          src={testiFrame1} 
          alt="Testimonials Row 1" 
          className="w-full h-auto object-contain" 
        />

        {/* FRAME KEDUA (Baris Bawah) */}
        <img 
          src={testiFrame2} 
          alt="Testimonials Row 2" 
          className="w-full h-auto object-contain" 
        />
        
      </div>
    </section>
  );
}
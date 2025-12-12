import React from "react";
// Import kedua frame hasil ekspor kamu
import testiFrame1 from "../assets/testi-1.svg"; 
import testiFrame2 from "../assets/testi-2.svg"; 

export function Testimonials() {
  return (
    // TAMBAHKAN id="testimonial" DI SINI agar Navbar bisa scroll
    <section 
        id="testimonial" 
        className="w-full pt-16 pb-24 bg-white flex justify-center overflow-hidden font-sans"
    >
      {/* Container supaya lebar gambarnya sinkron sama konten atasnya */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        
        {/* JUDUL SECTION */}
        <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-extrabold text-[#1864AB] mb-4">
                Apa Kata Mereka?
            </h2>
            <p className="text-gray-500 text-lg">
                Dengar pengalaman dan testimoni dari para mahasiswa yang telah berpartisipasi dalam program Ruang Ekspresi.
            </p>
        </div>

        {/* FRAME TESTIMONI (Baris Atas) */}
        {/* Tambahkan margin-top untuk memisahkan dari judul */}
        <div className="flex flex-col items-center gap-4 w-full">
            <img 
              src={testiFrame1} 
              alt="Testimonials Row 1" 
              // Gunakan max-w-[90%] di mobile agar tidak terlalu lebar/gepeng
              className="w-full max-w-full lg:max-w-none h-auto object-contain" 
            />

            {/* FRAME KEDUA (Baris Bawah) */}
            <img 
              src={testiFrame2} 
              alt="Testimonials Row 2" 
              className="w-full max-w-full lg:max-w-none h-auto object-contain" 
            />
        </div>
      </div>
    </section>
  );
}
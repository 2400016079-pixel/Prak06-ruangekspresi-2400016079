import React from "react";
// Pastikan path gambar sudah benar sesuai folder assets Anda
import heroImg from "../assets/mahasiswa.png"; 

export function HeroSection() {
  return (
    // TAMBAHKAN id="home" DI SINI agar Navbar bisa scroll
    // 'pt-24' (bukan pt-32) agar tidak terlalu jauh dari Navbar fixed
    <section 
        id="home" 
        className="w-full pt-24 pb-32 flex justify-center bg-white overflow-hidden font-sans"
    >
      
      {/* Container utama */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* BAGIAN TEKS (KIRI) */}
        {/* Di mobile (md:w-[65%] dinonaktifkan di bawah md) */}
        <div className="w-full md:w-[65%] text-left order-2 md:order-1">
          {/* Judul Utama: Penyesuaian agar tidak terlalu besar di HP */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            {/* text-[#1864AB] adalah warna biru Figma kamu */}
            <span className="text-[#1864AB] whitespace-nowrap">RUANG EKSPRESI :</span>
            <span className="inline-block md:ml-3">Wadah kreatif & Kompetitif Mahasiswa</span>
          </h1>

          {/* Badge Tags */}
          {/* mt-8 (bukan mt-12) agar lebih proporsional */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-5 py-2 bg-[#FEF08A] text-yellow-900 rounded-full text-xs font-bold uppercase shadow-sm">Ideation</span>
            <span className="px-5 py-2 bg-[#BBF7D0] text-green-900 rounded-full text-xs font-bold uppercase shadow-sm">Creation</span>
            <span className="px-5 py-2 bg-[#BFDBFE] text-blue-900 rounded-full text-xs font-bold uppercase shadow-sm">Collaboration</span>
            <span className="px-5 py-2 bg-[#FBB5C4] text-pink-900 rounded-full text-xs font-bold uppercase shadow-sm">Guidance & Support</span>
          </div>
        </div>

        {/* BAGIAN GAMBAR (KANAN) */}
        {/* order-1 md:order-2: Pindah ke atas (di mobile) agar gambar muncul duluan sebelum teks */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end order-1 md:order-2">
          <img 
            src={heroImg} 
            alt="Hero Mahasiswa" 
            // Batasi ukuran gambar di mobile (max-h-80) agar tidak terlalu besar
            className="w-full max-w-[500px] h-auto max-h-80 md:max-h-full rounded-[3rem] shadow-2xl object-cover" 
          />
        </div>

      </div>
    </section>
  );
}
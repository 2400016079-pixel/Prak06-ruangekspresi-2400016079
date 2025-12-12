import React from "react";
// Pastikan path gambar sudah benar sesuai folder assets Anda
import heroImg from "../assets/mahasiswa.png"; 

export function HeroSection() {
  return (
    // 'pb-32' untuk memberi jarak luas ke section bawahnya
    <section className="w-full pt-32 pb-32 flex justify-center bg-white overflow-hidden">
      
      {/* Container utama untuk menjaga konten tetap simetris di tengah */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* BAGIAN TEKS (KIRI) */}
        <div className="w-full md:w-[65%] text-left">
          {/* Judul Utama: Dipastikan sejajar satu baris di layar desktop */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            <span className="text-[#1D4ED8] whitespace-nowrap">RUANG EKSPRESI :</span>
            <span className="inline-block md:ml-3">Wadah kreatif & Kompetitif Mahasiswa</span>
          </h1>

          {/* Badge Tags: 'mt-12' ditambah agar ada ruang karena deskripsi dihapus */}
          <div className="flex flex-wrap gap-3 mt-12">
            <span className="px-5 py-2 bg-[#FDE68A] text-yellow-900 rounded-full text-xs font-bold uppercase shadow-sm">Ideation</span>
            <span className="px-5 py-2 bg-[#BBF7D0] text-green-900 rounded-full text-xs font-bold uppercase shadow-sm">Creation</span>
            <span className="px-5 py-2 bg-[#DBEAFE] text-blue-900 rounded-full text-xs font-bold uppercase shadow-sm">Collaboration</span>
            <span className="px-5 py-2 bg-[#FCE7F3] text-pink-900 rounded-full text-xs font-bold uppercase shadow-sm">Guidance & Support</span>
          </div>
        </div>

        {/* BAGIAN GAMBAR (KANAN) */}
        {/* 'justify-end' memaksa gambar mepet ke kanan kontainer */}
        <div className="w-full md:w-[35%] flex justify-end">
          <img 
            src={heroImg} 
            alt="Hero Mahasiswa" 
            // rounded-[3rem] agar membulat rapi sesuai desain Figma
            className="w-full max-w-[500px] h-auto rounded-[3rem] shadow-2xl object-cover" 
          />
        </div>

      </div>
    </section>
  );
}
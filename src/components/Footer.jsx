import React from "react";
// 1. IMPORT 3 FRAME SESUAI NAMA FILE HASIL EKSPOR KAMU
import footerInfo from "../assets/Frame 167.png";     // Logo + Alamat + Kontak
import footerLinks from "../assets/Frame 165.png";    // Judul Quick Links + Listnya
import footerPrograms from "../assets/Frame 168.png"; // Judul Programs + Listnya

export function Footer() {
  return (
    /* Menggunakan kode warna figma asli #1864AB */
    // TAMBAHKAN id="contact" DI SINI agar Navbar bisa scroll
    <footer 
        id="contact" 
        className="w-full bg-[#1864AB] pt-20 pb-10 px-6 font-sans"
    >
      
      {/* Container utama untuk mengatur posisi 3 frame secara horizontal */}
      {/* flex-wrap ditambahkan agar di mobile dia otomatis turun ke baris baru */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 flex-wrap">
        
        {/* Bagian 1: Informasi Ruang Ekspresi & Kontak */}
        {/* md:w-1/3 agar porsi lebar di desktop cukup untuk konten info yang lebih panjang */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img 
            src={footerInfo} 
            alt="Footer Info" 
            className="h-auto w-auto object-contain" 
          />
        </div>

        {/* Bagian 2 & 3: Quick Links dan Programs */}
        {/* Dibungkus dalam satu div agar fleksibel di mobile */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-20 w-full md:w-auto">
            <div className="flex-shrink-0">
              <img 
                src={footerLinks} 
                alt="Quick Links" 
                className="h-auto w-auto object-contain" 
              />
            </div>

            <div className="flex-shrink-0">
              <img 
                src={footerPrograms} 
                alt="Programs" 
                className="h-auto w-auto object-contain" 
              />
            </div>
        </div>
      </div>

      {/* Baris Hak Cipta di paling bawah */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/20 text-center">
        <p className="text-white text-xs font-medium opacity-90">
          © 2025 Ruang Ekspresi | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
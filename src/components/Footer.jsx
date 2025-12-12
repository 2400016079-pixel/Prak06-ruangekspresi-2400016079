import React from "react";
// 1. IMPORT 3 FRAME SESUAI NAMA FILE HASIL EKSPOR KAMU
import footerInfo from "../assets/Frame 167.png";     // Logo + Alamat + Kontak
import footerLinks from "../assets/Frame 165.png";    // Judul Quick Links + Listnya
import footerPrograms from "../assets/Frame 168.png"; // Judul Programs + Listnya

export function Footer() {
  return (
    /* Menggunakan kode warna figma asli #1864AB agar birunya tajam dan vibran */
    <footer className="w-full bg-[#1864AB] pt-20 pb-10 px-6">
      
      {/* Container utama untuk mengatur posisi 3 frame secara horizontal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Bagian 1: Informasi Ruang Ekspresi & Kontak */}
        <div className="flex-shrink-0">
          <img 
            src={footerInfo} 
            alt="Footer Info" 
            className="h-auto w-auto object-contain" 
          />
        </div>

        {/* Bagian 2: Daftar Tautan Cepat (Quick Links) */}
        <div className="flex-shrink-0">
          <img 
            src={footerLinks} 
            alt="Quick Links" 
            className="h-auto w-auto object-contain" 
          />
        </div>

        {/* Bagian 3: Daftar Program Kegiatan */}
        <div className="flex-shrink-0">
          <img 
            src={footerPrograms} 
            alt="Programs" 
            className="h-auto w-auto object-contain" 
          />
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
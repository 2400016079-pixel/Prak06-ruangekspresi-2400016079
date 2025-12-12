import React from "react";
// --- IMPORT GAMBAR UTAMA ---
import iconKalender from "../assets/calender.png"; 
import textSetiapSabtu from "../assets/setiap Sabtu.png"; 

import imgSesiPagi from "../assets/sesi-pagi.png";
import imgSesiSore from "../assets/sesi-sore.png";

// --- IMPORT IKON PROGRAM BARU ---
import iconCareer from "../assets/career.png";
import iconExtra from "../assets/extra.png";
import iconProject from "../assets/project.png";
import iconMentoring from "../assets/mentoring.png";


export function Schedule() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-white">
      {/* Header Section */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Jadwal & <span className="text-[#1864AB]">Program Kegiatan</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6">
        {/* KARTU JADWAL UTAMA */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-14 relative border border-gray-50 mb-12">
          
          {/* BADGE SETIAP SABTU (POSISI DIKOREKSI SANGAT PRESISI) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-3 px-6 bg-white rounded-full shadow-lg border border-gray-100">
                {/* 1. Ikon Kalender (Gambar Export Terpisah) */}
                <img 
                  src={iconKalender} 
                  alt="Ikon Kalender" 
                  className="h-7 w-7 md:h-8 md:w-8 object-contain" 
                />

                {/* 2. Teks "Setiap Sabtu" (Gambar Export Terpisah) */}
                <img 
                  src={textSetiapSabtu} 
                  alt="Setiap Sabtu Text" 
                  className="ml-2 h-5 w-auto object-contain" 
                />
            </div>

          {/* GRID SESI PAGI & SORE (Margin disesuaikan agar tidak bertabrakan dengan badge) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"> 
            <div className="flex justify-center">
              <img 
                src={imgSesiPagi} 
                alt="Sesi Pagi" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={imgSesiSore} 
                alt="Sesi Sore" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>

        {/* 4 KOTAK PROGRAM DENGAN IKON GAMBAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          {/* Career Talks */}
          <div className="bg-[#FEF08A] p-8 rounded-[30px] shadow-sm flex flex-col items-start transition hover:-translate-y-2">
            <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <img src={iconCareer} alt="Career Talks" className="w-8 h-8 object-contain" />
            </div>
            <h4 className="font-extrabold mb-3 text-gray-800 text-lg">Career Talks</h4>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Sesi sharing dari praktisi industri dan alumni sukses</p>
          </div>
          
          {/* Extra Classes */}
          <div className="bg-[#BBF7D0] p-8 rounded-[30px] shadow-sm flex flex-col items-start transition hover:-translate-y-2">
            <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <img src={iconExtra} alt="Extra Classes" className="w-8 h-8 object-contain" />
            </div>
            <h4 className="font-extrabold mb-3 text-gray-800 text-lg">Extra Classes</h4>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Kelas tambahan skill development dan workshop teknis</p>
          </div>

          {/* Project Work */}
          <div className="bg-[#DBEAFE] p-8 rounded-[30px] shadow-sm flex flex-col items-start transition hover:-translate-y-2">
            <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <img src={iconProject} alt="Project Work" className="w-8 h-8 object-contain" />
            </div>
            <h4 className="font-extrabold mb-3 text-gray-800 text-lg">Project Work</h4>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Mengerjakan project nyata dengan bimbingan mentor</p>
          </div>

          {/* Mentoring */}
          <div className="bg-[#FCE7F3] p-8 rounded-[30px] shadow-sm flex flex-col items-start transition hover:-translate-y-2">
            <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <img src={iconMentoring} alt="Mentoring" className="w-8 h-8 object-contain" />
            </div>
            <h4 className="font-extrabold mb-3 text-gray-800 text-lg">Mentoring</h4>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Sesi konsultasi personal dengan mentor berpengalaman</p>
          </div>

        </div>
      </div>
    </section>
  );
}
import React from "react";

const progData = [
  { title: "Career Talks", color: "bg-[#FEF08A]", desc: "Sharing dari praktisi industri dan alumni sukses.", icon: "💬" },
  { title: "Extra Classes", color: "bg-[#BBF7D0]", desc: "Kelas tambahan skill development dan workshop teknis.", icon: "📚" },
  { title: "Project Work", color: "bg-[#BFDBFE]", desc: "Mengerjakan project nyata dengan bimbingan mentor.", icon: "💻" },
  { title: "Mentoring", color: "bg-[#FBB5C4]", desc: "Sesi konsultasi personal dengan mentor berpengalaman.", icon: "👥" }
];

export function Programs() {
  return (
    // TAMBAHKAN id="program" DI SINI agar Navbar bisa scroll
    <section 
        id="Program" 
        className="w-full py-20 flex justify-center bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        
        {/* JUDUL SECTION (Baru ditambahkan) */}
        <div className="text-center max-w-3xl mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Program <span className="text-[#1D4ED8]">Unggulan</span>
            </h2>
            <p className="text-gray-600 text-lg">
                Pilih jalur yang tepat untuk mengembangkan ide dan keterampilanmu.
            </p>
        </div>

        {/* Grid Kartu Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {progData.map((p, i) => (
            <div 
              key={i} 
              // Ganti shadow-sm ke shadow-md agar lebih jelas
              className={`${p.color} p-10 rounded-[35px] shadow-md hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8">
                {p.icon}
            </div>
              <h3 className="font-extrabold text-xl mb-4 text-gray-800">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
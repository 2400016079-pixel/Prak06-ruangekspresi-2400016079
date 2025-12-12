import React from "react";
// Import aset
import iconIdeation from "../assets/ideation.png";
import iconCreation from "../assets/creation.png";
import iconCollaboration from "../assets/collaboration.png";
import iconSupport from "../assets/support.png";

export function Pillars() {
  // Data Pilar (Tidak diubah)
  const pillars = [
    { title: "Ideation", desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.", icon: iconIdeation, color: "bg-[#FEF08A]" },
    { title: "Creation", desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.", icon: iconCreation, color: "bg-[#BBF7D0]" },
    { title: "Collaboration", desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.", icon: iconCollaboration, color: "bg-[#BFDBFE]" },
    { title: "Guidance & Support", desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.", icon: iconSupport, color: "bg-[#FBB5C4]" },
  ];

  return (
    // ID DIGANTI DARI 'program' MENJADI 'about'
    <section 
        id="about" 
        className="bg-gray-50 py-20 md:py-24 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Judul Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Empat Pilar <span className="text-[#1864AB]">Ruang Ekspresi</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik.
          </p>
        </div>

        {/* Grid 4 Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.color} p-8 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* BAGIAN IKON */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";

import iconIdeation from "../assets/ideation.png";
import iconCreation from "../assets/creation.png";
import iconCollaboration from "../assets/collaboration.png";
import iconSupport from "../assets/support.png";

export function Pillars() {
  // 2. DATA PILAR DENGAN IKON UNIK
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      icon: iconIdeation // Menggunakan ikon ideation
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      icon: iconCreation // Menggunakan ikon creation
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif..",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: iconCollaboration // Menggunakan ikon collaboration
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      icon: iconSupport // Menggunakan ikon support
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
          </h2>
          <p className="text-gray-600">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik.
          </p>
        </div>

        {/* Grid 4 Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.color} p-8 rounded-2xl transition hover:-translate-y-2 hover:shadow-lg`}
            >
              {/* BAGIAN IKON YANG DIGANTI: Menggunakan tag <img> untuk memanggil ikon unik */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-7 h-7 object-contain" 
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
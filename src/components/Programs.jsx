import React from "react";

const progData = [
  { title: "Career Talks", color: "bg-[#FEF08A]", desc: "Sharing dari praktisi industri dan alumni sukses.", icon: "💬" },
  { title: "Extra Classes", color: "bg-[#BBF7D0]", desc: "Kelas tambahan skill development dan workshop teknis.", icon: "📚" },
  { title: "Project Work", color: "bg-[#DBEAFE]", desc: "Mengerjakan project nyata dengan bimbingan mentor.", icon: "💻" },
  { title: "Mentoring", color: "bg-[#FCE7F3]", desc: "Sesi konsultasi personal dengan mentor berpengalaman.", icon: "👥" }
];

export function Programs() {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {progData.map((p, i) => (
          <div key={i} className={`${p.color} p-10 rounded-[35px] shadow-sm hover:scale-105 transition-transform duration-300`}>
            <div className="bg-white/50 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8">
              {p.icon}
            </div>
            <h3 className="font-extrabold text-xl mb-4 text-gray-800">{p.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
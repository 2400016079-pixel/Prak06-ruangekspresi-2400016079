export default function CardGallery() {
  // Data Pilar sesuai gambar
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools terkini.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses resources.",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
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
            <div key={idx} className={`${item.color} p-8 rounded-2xl transition hover:-translate-y-2 hover:shadow-lg`}>
              {/* Icon Sederhana */}
              <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm ${item.iconColor}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
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
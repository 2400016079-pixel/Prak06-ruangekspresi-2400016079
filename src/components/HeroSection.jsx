export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            <span className="text-blue-600">RUANG EKSPRESI :</span> Wadah
            kreatif & Kompetitif Mahasiswa
          </h1>
          
          {/* Badge Warna-warni */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-semibold">Ideation</span>
            <span className="px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-semibold">Creation</span>
            <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">Collaboration</span>
            <span className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full text-sm font-semibold">Guidance & Support</span>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="relative">
          {/* Ganti src ini dengan gambar asli Anda nanti */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Collaboration Team" 
            className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
          />
          {/* Hiasan background blob (opsional) */}
          <div className="absolute -z-10 top-10 right-10 w-full h-full bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
}
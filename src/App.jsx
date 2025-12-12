import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardGallery from "./components/CardGallery";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <HeroSection />
      {/* CardGallery sekarang menampilkan 'Empat Pilar' */}
      <CardGallery /> 
    </div>
  );
}

export default App;
export default function Navbar() {
  const menus = ["Home", "About", "Program", "Project", "Testimonials", "Contact"];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-xl font-bold text-gray-800">
            ruang<span className="text-blue-600">ekspresi</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          {menus.map((menu) => (
            <li key={menu} className="hover:text-blue-600 cursor-pointer transition">
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-telkomsel.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "Produk Kami", id: "produk-kami" },
    { name: "Tentang Kami", id: "tentang-kami" },
    { name: "Layanan Pelanggan", id: "layanan-pelanggan" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center py-6 px-6">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <img
            src={Logo}
            alt="logoTelkomsel"
            className="w-32 hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-red-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black hover:text-red-600 bg-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-red py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

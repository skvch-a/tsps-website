import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/projects", label: "Проекты" },
  { href: "/career", label: "Карьера" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navigation() {
  const [location, navigate] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location === '/';

  const handleClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-end items-center">
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`text-white font-tektur font-medium transition-colors duration-300 hover:text-gray-300 relative ${
                  location === item.href ? "border-b-2 border-white" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`block w-full text-left text-white font-tektur font-medium py-2 transition-colors duration-300 hover:text-gray-300 ${
                  location === item.href ? "border-l-2 border-white pl-4" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

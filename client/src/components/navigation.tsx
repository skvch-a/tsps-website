import { useState } from "react";
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <div className="max-w-full px-6 py-4 flex justify-between items-center">

      {/* Логотип слева */}
        <button onClick={() => navigate('/')} className="flex items-center">
          <img src="/logo.svg" alt="Логотип" className="w-48 h-auto" />
        </button>

        <div className="flex justify-end items-center">
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`text-black font-tektur font-medium transition-colors duration-300 hover:text-gray-500 relative ${
                  location === item.href ? "border-b-2 border-black" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col"
          style={{ top: 0 }}
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  onClick={() => handleClick(item.href)}
                  className={`block w-full text-left text-white font-tektur font-medium py-4 text-xl transition-colors duration-300 hover:text-gray-300 ${
                    location === item.href ? "text-white border-l-4 border-white pl-6" : ""
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

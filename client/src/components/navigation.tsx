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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-end items-center">
          <div className="flex space-x-8">
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
        </div>
      </div>
    </nav>
  );
}

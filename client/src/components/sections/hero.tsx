import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="glavnaya" className="min-h-screen relative">
      {/* Hero Image Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Empty as per requirement */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          {/* No content as per requirement - no text overlay on hero */}
        </div>
      </div>
    </section>
  );
}

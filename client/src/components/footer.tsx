import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">

        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400"
        >
          <p>&copy; 2025 ООО "ТЮМЕНСКИЙ СТРОЙПРОЕКТСЕРВИС"</p>
          <p className="mt-2">ИНН: 7203140101 | ОГРН: 1037200637539</p>
        </motion.div>
      </div>
    </footer>
  );
}

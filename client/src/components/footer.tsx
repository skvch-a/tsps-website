import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-tektur font-semibold mb-4">Дизайн Бюро</h3>
            <p className="text-gray-300 leading-relaxed">
              Создаем уникальные пространства и визуальные решения для современного мира
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>+7 (495) 123-45-67</p>
              <p>info@designbureau.ru</p>
              <p>Тюмень, ул. Полевая, 27</p>
            </div>
          </motion.div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Дизайн Бюро. Все права защищены.</p>
          <p className="mt-2">ИНН: 1234567890 | ОГРН: 1234567890123 | Лицензия на осуществление деятельности</p>
        </motion.div>
      </div>
    </footer>
  );
}

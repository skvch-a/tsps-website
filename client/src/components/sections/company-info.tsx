import { motion } from "framer-motion";
import { Lightbulb, Monitor, Building } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Брендинг",
    description: "Создание уникальной визуальной идентичности для вашего бизнеса",
  },
  {
    icon: Monitor,
    title: "Веб-дизайн",
    description: "Современные и функциональные решения для цифрового пространства",
  },
  {
    icon: Building,
    title: "Архитектура",
    description: "Проектирование пространств, которые вдохновляют и мотивируют",
  },
];

const partners = ["Партнер 1", "Партнер 2", "Партнер 3", "Партнер 4"];

export default function CompanyInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
            Создаем будущее дизайна
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы — команда профессионалов, которая воплощает самые смелые идеи в реальность.
            Наше дизайн-бюро специализируется на создании уникальных решений для современного мира.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-light-bg rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-tektur font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-tektur font-semibold text-primary mb-8">
            Наши партнеры
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

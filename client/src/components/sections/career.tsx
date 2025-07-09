import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Творческая свобода",
    description: "Возможность реализовать самые смелые идеи в проектах",
  },
  {
    title: "Профессиональный рост",
    description: "Постоянное обучение и развитие навыков",
  },
  {
    title: "Гибкий график",
    description: "Возможность работы из офиса или удаленно",
  },
];

const advantages = [
  {
    title: "Конкурентная зарплата",
    description: "Достойная оплата труда и премии за результат",
  },
  {
    title: "Современное оборудование",
    description: "Новейшие инструменты и технологии для работы",
  },
  {
    title: "Корпоративные мероприятия",
    description: "Регулярные тимбилдинги и профессиональные конференции",
  },
];

const vacancies = [
  {
    title: "Дизайнер интерьеров",
    type: "Полная занятость • Москва",
  },
  {
    title: "Архитектор",
    type: "Полная занятость • Москва",
  },
  {
    title: "3D-визуализатор",
    type: "Частичная занятость • Удаленно",
  },
];

export default function Career() {
  return (
    <section id="kariera" className="py-20 bg-light-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
            Карьера
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к команде профессионалов, которая создает будущее дизайна
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-tektur font-semibold text-primary">
              Почему стоит работать с нами?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* TODO: Replace with your office/team photo */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Команда за работой"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative md:order-2"
          >
            {/* TODO: Replace with your workplace benefits photo */}
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Рабочая среда"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 md:order-1"
          >
            <h3 className="text-2xl font-tektur font-semibold text-primary">
              Наши преимущества
            </h3>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{advantage.title}</h4>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-tektur font-semibold text-primary mb-6 text-center">
            Открытые вакансии
          </h3>
          <div className="space-y-4">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-light-bg rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <h4 className="font-semibold text-primary">{vacancy.title}</h4>
                  <p className="text-gray-600">{vacancy.type}</p>
                </div>
                <button className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                  Откликнуться
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="o-nas" className="py-20 bg-light-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
            О нас
          </h2>
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
              Наша история
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Основанное в 2015 году, наше дизайн-бюро прошло путь от небольшой студии до одного из ведущих
              агентств в области дизайна и архитектуры. За это время мы реализовали более 200 проектов
              различного масштаба.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы верим в силу качественного дизайна и его способность изменять мир к лучшему.
              Каждый проект для нас — это возможность создать что-то уникальное и значимое.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* TODO: Replace with your team photo */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Команда дизайн-бюро"
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
            {/* TODO: Replace with your office/workspace photo */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Рабочее пространство"
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
              Наша философия
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы создаем не просто красивые вещи, а функциональные решения, которые улучшают жизнь людей.
              Наш подход основан на глубоком понимании потребностей клиентов и современных тенденций.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Инновации, качество и внимание к деталям — вот три кита, на которых строится наша работа.
              Мы постоянно развиваемся и изучаем новые технологии, чтобы предлагать самые актуальные решения.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

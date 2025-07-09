import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-light-bg">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
                О нас
              </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-tektur font-semibold text-primary">
                  Наша история
                </h2>
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative md:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Рабочее пространство"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6 md:order-1"
              >
                <h2 className="text-2xl font-tektur font-semibold text-primary">
                  Наша философия
                </h2>
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
      </main>
      <Footer />
    </div>
  );
}
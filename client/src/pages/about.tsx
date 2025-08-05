import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
      <div className="min-h-screen bg-light-bg">
        <Navigation />
        <main className="pt-16">
          <section className="py-16 bg-light-bg">
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
                    Основанная в 2003 году, компания «Тюменский стройпроектсервис» реализовала свыше 150 (тут могло быть нужное число) проектов зданий и сооружений. Наш опыт, профессионализм и индивидуальный подход позволяют нам создавать эффективные и современные решения, соответствующие самым высоким требованиям клиентов и стандартам отрасли.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Мы верим, что качественное проектирование и строительство — это основа безопасности и комфорта. Каждый наш объект — это вклад в развитие современной городской среды.
                  </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                  <img
                      src="about/2.jpg"
                      alt="«Тюменский стройпроектсервис»"
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
                      src="about/3.jpg"
                      alt="«Тюменский стройпроектсервис»"
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
                    Проектируем будущее
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Мы создаем не просто здания, а надежные и функциональные пространства для жизни и работы. Наш подход основан на глубоком анализе, точном инженерном расчете и соблюдении строительных норм.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Надежность, безопасность и инновации — вот три кита, на которых строится наша работа. Мы применяем современные технологии и материалы, чтобы гарантировать долговечность и высокое качество наших объектов.
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
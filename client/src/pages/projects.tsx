import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const projects = [
  {
    id: 1,
    image: "projects/lukoil.webp",
    title: 'Представительство "ЛУКОЙЛ-Западная Сибирь"',
  },
  {
    id: 3,
    image: 'projects/domlespark.webp',
    title: 'Жилой комплекс "Дом.Лес.Парк"',
  },
  {
    id: 4,
    image: "projects/uralinform.webp",
    title: 'Административное здание ООО "Тюменьтелеком"',
  },
  {
    id: 5,
    image: "projects/april.jpg",
    title: "Детский сад «Апрельский»"
  },
  {
    id: 2,
    image: "projects/biog.jpg",
    title: 'Жилой комплекс "Биография"',
  },
  {
    id: 6,
    image: "projects/ozhogino.jpg",
    title: 'Жилой комплекс "Ожогино"',
  },
];

export default function Projects() {
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
                  Проекты
                </h1>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                            project.id === 1 ? "md:row-span-2" : ""
                        } ${
                            project.id === 6 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                    >
                      <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                              project.id === 1 || project.id === 6 ? "h-full" : "h-80"
                          }`}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-6">
                          <h3 className="text-xl font-tektur font-regular mb-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}
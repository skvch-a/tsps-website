import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Building, DraftingCompass, Network } from "lucide-react";

const services = [
    {
        icon: DraftingCompass,
        title: "Конструктивное проектирование",
        description: "Создание надёжных и безопасных конструктивных решений в соответствии с современными нормами и стандартами.",
    },
    {
        icon: Building,
        title: "Архитектурное проектирование",
        description: "Разработка оригинальных архитектурных концепций, гармонично интегрированных в окружающую среду.",
    },
    {
        icon: Network,
        title: "Инженерные сети и коммуникации",
        description: "Комплексное проектирование систем отопления, вентиляции, кондиционирования и электроснабжения.",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-light-bg">
            <Navigation/>

            {/* Hero Section */}
            <main className="min-h-screen relative">
                <div className="absolute inset-0 hero-bg"></div>
                <div className="relative z-10 min-h-screen flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-6">
                    </div>
                </div>
            </main>

            {/* Company Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-lg md:text-3xl font-tektur font-regular text-gray-600 mb-6">
                            Тюменский стройпроектсервис — надежная компания в области архитектурного и инженерного проектирования. С 2001 года мы успешно реализуем проекты различного масштаба, обеспечивая высокое качество, инновационный подход и соблюдение сроков.
                        </h2>
                    </motion.div>


                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-tektur font-bold text-primary">
                            Наши услуги
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="text-center p-6 bg-light-bg rounded-2xl hover:shadow-lg transition-shadow duration-300"
                            >
                                <div
                                    className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-tektur font-semibold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center"
                    ></motion.div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

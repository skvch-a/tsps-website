import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (345) 252-01-33",
  },
  {
    icon: Mail,
    title: "Email",
    value: "oootsps@yandex.ru",
  },
  {
    icon: MapPin,
    title: "Адрес",
    value: "Тюмень, ул. Полевая, 27к2",
  },
];

export default function Contacts() {
  return (
      <div className="flex flex-col min-h-screen bg-light-bg">
        <Navigation />
        <main className="pt-16 flex-1">
          <section className="py-16 bg-light-bg">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
                  Контакты
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-tektur font-semibold text-primary mb-6">
                      Как с нами связаться
                    </h2>
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                              <info.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-primary">{info.title}</p>
                              <p className="text-gray-600">{info.value}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                    <div className="relative">
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=65.501234%2C57.161147&z=17&mode=search&oid=1774077408&ol=biz"

                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '16px' }}
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Тюмень, Полевая улица, 27к2"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}
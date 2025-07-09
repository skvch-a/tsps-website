import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (495) 123-45-67",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@designbureau.ru",
  },
  {
    icon: MapPin,
    title: "Адрес",
    value: "Москва, ул. Дизайнерская, 10",
  },
];

export default function Contacts() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке сообщения. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-white">
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

                <div className="bg-light-bg p-6 rounded-2xl">
                  <h3 className="text-xl font-tektur font-semibold text-primary mb-4">
                    Написать нам
                  </h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ваше имя</FormLabel>
                            <FormControl>
                              <Input placeholder="Введите ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Введите ваш email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Сообщение</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Введите ваше сообщение"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-indigo-600"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Отправляем..." : "Отправить сообщение"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Наш офис"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>

                <div className="relative">
                  <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-medium">Карта будет здесь</p>
                      <p className="text-gray-400 text-sm">Интеграция с Google Maps/Yandex Maps</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
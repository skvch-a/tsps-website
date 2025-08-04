import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const benefits = [
	{
		title: "Конкурентная зарплата",
		description: "Достойная оплата труда и премии за результат",
	},
	{
		title: "Профессиональный рост",
		description: "Постоянное обучение и развитие навыков",
	},
	{
		title: "Современное оборудование",
		description: "Новейшие инструменты и технологии для работы",
	},
];

export default function Career() {
	return (
		<div className="min-h-screen bg-light-bg flex flex-col">
			<Navigation />
			<main className="pt-16 flex-grow">
				<section className="py-16 bg-light-bg">
					<div className="max-w-6xl mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center mb-16"
						>
							<h1 className="text-4xl md:text-5xl font-tektur font-bold text-primary mb-6">
								Карьера
							</h1>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								Работайте с профессионалами, создающими комплексные инженерные
								решения
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="space-y-6"
							>
								<h2 className="text-2xl font-tektur font-semibold text-primary">
									Почему стоит работать с нами?
								</h2>
								<div className="space-y-4">
									{benefits.map((benefit, index) => (
										<div
											key={index}
											className="flex items-start space-x-3"
										>
											<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
												<Check className="w-3 h-3 text-white" />
											</div>
											<div>
												<h4 className="font-semibold text-primary">
													{benefit.title}
												</h4>
												<p className="text-gray-600">
													{benefit.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="relative"
							>
								<img
									src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
									alt="Офис"
									className="rounded-2xl shadow-2xl w-full h-auto"
								/>
							</motion.div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
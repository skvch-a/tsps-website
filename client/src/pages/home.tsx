import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import CompanyInfo from "@/components/sections/company-info";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Career from "@/components/sections/career";
import Contacts from "@/components/sections/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation />
      <Hero />
      <CompanyInfo />
      <About />
      <Projects />
      <Career />
      <Contacts />
      <Footer />
    </div>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technos from "@/components/Technos";

export default function HomePage() {
  return (
    <main className="px-5 flex-1 lg:px-10 xl:px-15 2xl:px-30">
      <Hero />
      <Projects />
      <Technos />
      <About />
      <Contact />
    </main>
  ) 
}
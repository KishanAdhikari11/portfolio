import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact"; 
import About from "../components/About";

export default function Home() {

  return (
    <main className="bg-[#050505] selection:bg-white selection:text-black">
    

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

       <section id="about">
        <About />
      </section>


      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}
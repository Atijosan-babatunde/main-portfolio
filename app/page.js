import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CounterAndHire from "@/components/CounterAndHire";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import AosInit from "@/components/AosInit";

export default function Home() {
  return (
    <>
      <AosInit />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <CounterAndHire />
      <Contact />
      <Footer />
      <Loader />
    </>
  );
}

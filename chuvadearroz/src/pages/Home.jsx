import Hero from "../components/Hero";
import About from "../components/about";
import Event from "../components/Event";
import Highlights from "../components/Highlights";
import Avaliacoes from "../components/Avaliacoes";
import CTA from "../components/CTA";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Portfolio from "../components/Portifolio";
import Perguntas from "../components/Perguntas";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F8F5F0] text-[#292721]">
      <Header />
      <Hero />
      <About />
      <Event />
      <Highlights />
      <Avaliacoes />
      <CTA />
      <Formulario />
      <Portfolio />
      <Perguntas />
      <Footer />
    </main>
  );
}

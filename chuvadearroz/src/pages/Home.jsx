import { useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import Card from "../components/Card";

const servicos = [
  {
    id: 1,
    titulo: "Assessoria Completa",
    categoria: "Planejamento",
    descricao:
      "Acompanhamos cada etapa do casamento, desde os primeiros preparativos até o grande dia.",
    imagem:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    titulo: "Cerimonial do Dia",
    categoria: "Cerimonial",
    descricao:
      "Cuidamos de todos os detalhes no dia do casamento para que vocês possam aproveitar cada momento.",
    imagem:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    titulo: "Planejamento Personalizado",
    categoria: "Planejamento",
    descricao:
      "Um planejamento criado de acordo com o estilo, os sonhos e as necessidades de cada casal.",
    imagem:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    titulo: "Destination Wedding",
    categoria: "Experiências",
    descricao:
      "Organizamos celebrações especiais em destinos escolhidos para tornar a experiência ainda mais inesquecível.",
    imagem:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
  },
];

const categorias = [
  "Todos",
  "Planejamento",
  "Cerimonial",
  "Experiências",
];

export default function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const servicosFiltrados =
    categoriaSelecionada === "Todos"
      ? servicos
      : servicos.filter(
          (servico) => servico.categoria === categoriaSelecionada
        );

  return (
    <main>

   
      <section
        id="inicio"
        className="min-h-screen pt-32 pb-20 bg-[#F8F5F0] relative overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D8C8B8]/40 rounded-full blur-3xl" />

        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#B7C0AD]/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

      
          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D8C8B8] text-[#8A8175] text-sm mb-6 shadow-sm">
              <FaHeart className="text-[#B89B72] text-xs" />
              Assessoria & Cerimonial
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#292721] leading-tight mb-6">
              Seu grande dia,
              <span className="block text-[#B89B72] italic">
                exatamente como sonhou.
              </span>
            </h1>

            <p className="text-lg text-[#6F6A62] leading-relaxed mb-8 max-w-lg">
              Planejamos cada detalhe do seu casamento para que você possa
              viver cada momento com tranquilidade, emoção e a certeza de
              que tudo estará perfeito.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#servicos"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#292721] text-white font-medium hover:bg-[#B89B72] transition duration-300"
              >
                Conheça nossos serviços
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="#contato"
                className="px-6 py-3.5 rounded-xl border border-[#B89B72] text-[#6F604E] font-medium hover:bg-[#B89B72] hover:text-white transition duration-300"
              >
                Vamos conversar
              </a>

            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#D8C8B8]">

              <div>
                <p className="text-2xl font-serif text-[#292721]">
                  10+
                </p>

                <p className="text-sm text-[#8A8175]">
                  anos de experiência
                </p>
              </div>

              <div>
                <p className="text-2xl font-serif text-[#292721]">
                  150+
                </p>

                <p className="text-sm text-[#8A8175]">
                  histórias realizadas
                </p>
              </div>

              <div>
                <p className="text-2xl font-serif text-[#292721]">
                  100%
                </p>

                <p className="text-sm text-[#8A8175]">
                  dedicação aos noivos
                </p>
              </div>

            </div>

          </div>

          <div className="relative">

            <div className="absolute -inset-4 border border-[#B89B72]/30 rounded-[2rem] rotate-2" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Casamento ao ar livre"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            </div>

           
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl">

              <p className="text-xs uppercase tracking-[0.2em] text-[#8A8175] mb-1">
                Lumière Weddings
              </p>

              <p className="font-serif text-xl text-[#292721]">
                Momentos que ficam para sempre.
              </p>

            </div>

          </div>

        </div>
      </section>


   
      <section
        id="servicos"
        className="py-24 bg-[#FDFBF8]"
      >

        <div className="max-w-7xl mx-auto px-6">

        
          <div className="max-w-2xl mb-12">

            <p className="text-sm uppercase tracking-[0.25em] text-[#B89B72] mb-3">
              Como podemos ajudar
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-[#292721] mb-5">
              Tudo para tornar seu casamento inesquecível.
            </h2>

            <p className="text-[#777169] text-lg leading-relaxed">
              Da organização inicial aos últimos detalhes da celebração,
              cuidamos de cada etapa para que vocês possam simplesmente
              aproveitar o momento.
            </p>

          </div>


     
          <div className="flex flex-wrap gap-3 mb-10">

            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition duration-300 ${
                  categoriaSelecionada === categoria
                    ? "bg-[#292721] text-white"
                    : "bg-white text-[#6F6A62] border border-[#E5DDD4] hover:border-[#B89B72] hover:text-[#B89B72]"
                }`}
              >
                {categoria}
              </button>
            ))}

          </div>


        
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {servicosFiltrados.map((servico) => (
              <Card
                key={servico.id}
                titulo={servico.titulo}
                descricao={servico.descricao}
                imagem={servico.imagem}
                categoria={servico.categoria}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
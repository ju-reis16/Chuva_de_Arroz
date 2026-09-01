import { FaArrowRight } from "react-icons/fa";

const momentos = [
  {
    id: 1,
    titulo: "Cerimônias inesquecíveis",
    imagem:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    titulo: "Detalhes que encantam",
    imagem:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    titulo: "Celebrações únicas",
    imagem:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    titulo: "Amor em cada detalhe",
    imagem:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Prtifolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-[#173C30] relative overflow-hidden"
    >
      {/* Decorações */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#AFC7B9]/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#DCE9DF]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#BFD4C8] mb-3">
              Nossos momentos
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Histórias que merecem
              <span className="block italic text-[#DCE9DF]">
                ser lembradas.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-white/65 leading-relaxed">
            Cada casamento possui uma história única. Nós cuidamos dos
            detalhes para transformar sonhos em momentos inesquecíveis.
          </p>

        </div>

        {/* IMAGENS */}
        <div className="grid md:grid-cols-2 gap-6">

          {momentos.map((momento) => (
            <div
              key={momento.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                shadow-xl
              "
            >

              <img
                src={momento.imagem}
                alt={momento.titulo}
                className="
                  w-full
                  h-[320px] md:h-[380px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* Gradiente */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#173C30]/90
                  via-transparent
                  to-transparent
                "
              />

              {/* Texto */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-serif text-white">
                    {momento.titulo}
                  </h3>

                  <div
                    className="
                      flex-shrink-0
                      w-11 h-11
                      rounded-full
                      bg-white/15
                      backdrop-blur-md
                      border border-white/20
                      flex items-center justify-center
                      text-white
                      group-hover:bg-[#DCE9DF]
                      group-hover:text-[#173C30]
                      transition
                    "
                  >
                    <FaArrowRight className="text-sm -rotate-45" />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
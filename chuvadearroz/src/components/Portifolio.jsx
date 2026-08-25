const fotos = [
  {
    imagem:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    titulo: "Um dia para lembrar"
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    titulo: "Celebrações únicas"
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    titulo: "Detalhes especiais"
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
    titulo: "Momentos inesquecíveis"
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900",
    titulo: "Amor em cada detalhe"
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=900",
    titulo: "Sonhos realizados"
  }
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-[#E8F0E6]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-sm uppercase tracking-[0.3em] text-[#527A63] mb-3">
            Portfólio
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#25483A] mb-5">
            Histórias que ajudamos a contar
          </h2>

          <p className="text-[#68736C] leading-relaxed">
            Alguns momentos especiais que mostram um pouco
            do nosso trabalho.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {fotos.map((foto, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                aspect-[4/5]
                bg-white
              "
            >

              <img
                src={foto.imagem}
                alt={foto.titulo}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#25483A]/80
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  text-white
                  translate-y-4
                  opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition
                "
              >
                <h3 className="text-xl font-serif">
                  {foto.titulo}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
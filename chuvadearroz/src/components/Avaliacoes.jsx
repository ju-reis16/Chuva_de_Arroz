const depoimentos = [
  {
    nome: "Mariana & Lucas",
    texto:
      "A Chuva de Arroz conseguiu transformar tudo o que imaginávamos em realidade. Cada detalhe estava perfeito.",
  },
  {
    nome: "Ana & Gabriel",
    texto:
      "Desde o primeiro contato fomos tratados com muito carinho. Nosso casamento foi exatamente como sonhamos.",
  },
  {
    nome: "Beatriz & Rafael",
    texto:
      "Ter uma equipe cuidando de tudo fez toda a diferença. Conseguimos aproveitar cada segundo do nosso grande dia.",
  }
];

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-[#F7AFAF8]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-sm uppercase tracking-[0.3em] text-[#527A63] mb-3">
            Depoimentos
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#25483A] mb-5">
            Histórias de quem confiou em nós
          </h2>

          <p className="text-[#68736C]">
            Cada casal tem uma história. E é uma alegria fazer parte dela.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-7">

          {depoimentos.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-[#DCE5DC]
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-lg
                transition
              "
            >

              <div className="text-[#527A63] text-lg mb-5">
                ★★★★★
              </div>

              <p className="text-[#68736C] leading-relaxed italic mb-7">
                “{item.texto}”
              </p>

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10 h-10
                    rounded-full
                    bg-[#E8F0E6]
                    flex items-center justify-center
                    text-[#527A63]
                  "
                >
                  ♥
                </div>

                <p className="font-semibold text-[#25483A]">
                  {item.nome}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
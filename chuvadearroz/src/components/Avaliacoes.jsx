const avaliacoes = [
  {
    id: 1,
    nome: "Mariana e Lucas",
    texto:
      "A Chuva de Arroz tornou nosso casamento ainda mais especial. Tivemos tranquilidade para aproveitar cada momento sabendo que tudo estava sendo cuidado.",
    evento: "Casamento em Vinhedo",
  },
  {
    id: 2,
    nome: "Beatriz e Rafael",
    texto:
      "Desde o primeiro contato, sentimos que nossos sonhos estavam em boas mãos. Cada detalhe ficou exatamente como imaginávamos.",
    evento: "Casamento ao ar livre",
  },
  {
    id: 3,
    nome: "Camila e André",
    texto:
      "Foi incrível ter uma equipe tão atenciosa ao nosso lado. O planejamento foi leve, organizado e o resultado foi inesquecível.",
    evento: "Cerimônia e recepção",
  },
];

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="py-24 bg-[#F8FAF7]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-[#315C4A] mb-3">
            Histórias reais
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#18382C] mb-5">
            O que nossos casais dizem
          </h2>

          <p className="text-[#66736C] text-lg leading-relaxed">
            Cada casamento é único. E não há nada melhor do que ouvir de quem
            viveu esse momento com a gente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {avaliacoes.map((avaliacao) => (
            <div
              key={avaliacao.id}
              className="
                bg-white
                border border-[#DCE7E0]
                rounded-3xl
                p-8
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#AFC7B9]
                transition-all
                duration-300
              "
            >
              {/* Aspas */}
              <div className="text-5xl font-serif text-[#315C4A] mb-4">
                “
              </div>

              <p className="text-[#59665F] leading-relaxed mb-7">
                {avaliacao.texto}
              </p>

              <div className="border-t border-[#E5ECE7] pt-5">
                <h3 className="font-semibold text-lg text-[#18382C]">
                  {avaliacao.nome}
                </h3>

                <p className="text-sm text-[#809087] mt-1">
                  {avaliacao.evento}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
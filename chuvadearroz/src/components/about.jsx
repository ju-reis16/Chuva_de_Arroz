import {
  FaHeart,
  FaGem,
  FaHandsHelping,
  FaStar,
  FaLeaf,
} from "react-icons/fa";

const valores = [
  {
    icone: <FaHeart />,
    titulo: "Cuidado",
    descricao: "Atenção verdadeira a cada detalhe.",
  },
  {
    icone: <FaGem />,
    titulo: "Elegância",
    descricao: "Beleza que combina com cada história.",
  },
  {
    icone: <FaHandsHelping />,
    titulo: "Parceria",
    descricao: "Sempre ao lado dos nossos noivos.",
  },
  {
    icone: <FaStar />,
    titulo: "Excelência",
    descricao: "Compromisso em tornar tudo especial.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-6 relative">

            <div className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full bg-[#DCE9DF]/60 blur-2xl" />

            <div className="relative h-[550px] overflow-hidden rounded-[2.5rem]">
              <img
                src="https://weddingitaly.s3.amazonaws.com/system/images/image_files/000/030/451/big/0544.jpg?1637336041"
                alt="Noivos celebrando o casamento"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173C30]/40 via-transparent to-transparent" />

              {/* FRASE SOBRE A IMAGEM */}
              <div className="absolute bottom-7 left-7 right-7">

                <div className="flex items-center gap-3 text-white mb-2">
                  <FaHeart className="text-sm" />

                  <span className="text-xs uppercase tracking-[0.25em]">
                    Feito com carinho
                  </span>
                </div>

                <p className="text-2xl md:text-3xl font-serif text-white leading-tight">
                  Cada detalhe conta uma parte da história de vocês.
                </p>

              </div>
            </div>

          </div>

          {/* TEXTO */}
          <div className="lg:col-span-6 lg:pl-10">

            <p className="text-sm uppercase tracking-[0.3em] text-[#315C4A] mb-4">
              Sobre a Chuva de Arroz
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#173C30] leading-[1.08] mb-7">
              Mais do que organizar,
              <span className="block italic text-[#315C4A]">
                nós vivemos o momento.
              </span>
            </h2>

            <p className="text-xl text-[#53635B] leading-relaxed mb-6">
              Acreditamos que o casamento começa muito antes do grande dia.
            </p>

            <p className="text-[#748078] leading-relaxed mb-5">
              É nos pequenos detalhes, nas escolhas, nas expectativas e em
              todos aqueles momentos compartilhados durante o planejamento
              que a história de vocês começa a ganhar forma.
            </p>

            <p className="text-[#748078] leading-relaxed mb-9">
              Por isso, nossa missão é cuidar de cada etapa com organização,
              sensibilidade e dedicação, transformando sonhos em uma
              celebração que tenha a personalidade de cada casal.
            </p>

            {/* ASSINATURA */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-px bg-[#315C4A]" />

              <p className="font-serif italic text-lg text-[#315C4A]">
                Chuva de Arroz
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* NÚMEROS */}
      <div className="bg-[#173C30]">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                10+
              </p>

              <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                anos de experiência
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                150+
              </p>

              <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                casamentos realizados
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                100%
              </p>

              <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                dedicação
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                ∞
              </p>

              <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                histórias para contar
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* MISSÃO E VISÃO */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* MISSÃO */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#F5F8F5]
              border border-[#DCE7E0]
              p-9 md:p-11
              hover:-translate-y-1
              transition-all duration-300
            "
          >

            <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[#DCE9DF] opacity-50" />

            <div className="relative">

              <div className="w-14 h-14 rounded-2xl bg-[#173C30] text-[#DCE9DF] flex items-center justify-center text-xl mb-7">
                <FaHeart />
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#315C4A] mb-3">
                Nossa missão
              </p>

              <h3 className="text-3xl md:text-4xl font-serif text-[#173C30] mb-5">
                Tornar o planejamento mais leve.
              </h3>

              <p className="text-[#6E7B74] leading-relaxed max-w-lg">
                Cuidar da organização e dos detalhes para que os noivos
                possam viver essa fase com tranquilidade, segurança e
                emoção, aproveitando cada momento do caminho até o altar.
              </p>

            </div>
          </div>

          {/* VISÃO */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#173C30]
              p-9 md:p-11
              hover:-translate-y-1
              transition-all duration-300
            "
          >

            <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[#315C4A] opacity-50" />

            <div className="relative">

              <div className="w-14 h-14 rounded-2xl bg-[#DCE9DF] text-[#173C30] flex items-center justify-center text-xl mb-7">
                <FaLeaf />
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#BFD4C8] mb-3">
                Nossa visão
              </p>

              <h3 className="text-3xl md:text-4xl font-serif text-white mb-5">
                Criar histórias que permaneçam.
              </h3>

              <p className="text-white/65 leading-relaxed max-w-lg">
                Ser lembrada não apenas pela organização impecável, mas pela
                experiência, pelo cuidado e pelos momentos que permanecem na
                memória muito depois do grande dia.
              </p>

            </div>
          </div>

        </div>

      </div>

      {/* VALORES */}
      <div className="bg-[#F8FAF7]">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#315C4A] mb-3">
                O que nos guia
              </p>

              <h3 className="text-4xl md:text-5xl font-serif text-[#173C30]">
                Feito de valores,
                <span className="italic text-[#315C4A]">
                  {" "}feito de verdade.
                </span>
              </h3>

            </div>

            <p className="text-[#748078] max-w-sm leading-relaxed">
              São esses princípios que estão presentes em cada casamento que
              temos o privilégio de acompanhar.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {valores.map((valor) => (
              <div
                key={valor.titulo}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  border border-[#DCE7E0]
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all duration-300
                "
              >

                <div className="text-[#315C4A] text-xl mb-5">
                  {valor.icone}
                </div>

                <h4 className="text-xl font-serif text-[#173C30] mb-2">
                  {valor.titulo}
                </h4>

                <p className="text-sm text-[#748078] leading-relaxed">
                  {valor.descricao}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
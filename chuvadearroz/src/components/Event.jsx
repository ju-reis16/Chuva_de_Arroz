import {
  FaComments,
  FaClipboardList,
  FaCalendarCheck
} from "react-icons/fa";

const etapas = [
  {
    id: 1,
    numero: "01",
    icone: <FaComments />,
    titulo: "Vamos conversar",
    descricao:
      "Começamos entendendo a história de vocês, seus sonhos e tudo o que imaginam para o grande dia.",
  },
  {
    id: 2,
    numero: "02",
    icone: <FaClipboardList />,
    titulo: "Planejamos juntos",
    descricao:
      "Organizamos cada etapa, fornecedores e detalhes para construir um casamento com a identidade do casal.",
  },
  {
    id: 3,
    numero: "03",
    icone: <FaCalendarCheck />,
    titulo: "Cuidamos de tudo",
    descricao:
      "No grande dia, nossa equipe acompanha cada detalhe para que vocês possam simplesmente aproveitar.",
  },
];

export default function Event() {
  return (
    <section
      id="servicos"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="max-w-2xl mb-14">

          <p className="text-sm uppercase tracking-[0.25em] text-[#315C4A] mb-3">
            Nossa forma de trabalhar
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-serif
              text-[#173C30]
              leading-tight
              mb-5
            "
          >
            Do primeiro sonho
            <span className="block italic text-[#315C4A]">
              ao grande dia.
            </span>
          </h2>

          <p className="text-[#69766F] text-lg leading-relaxed">
            Estaremos ao lado de vocês em cada etapa, tornando o planejamento
            mais leve, organizado e especial.
          </p>

        </div>

        {/* ETAPAS */}
        <div className="grid md:grid-cols-3 gap-7">

          {etapas.map((etapa) => (
            <div
              key={etapa.id}
              className="
                group
                relative
                bg-[#F8FAF7]
                border border-[#DCE7E0]
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#AFC7B9]
                transition-all
                duration-300
              "
            >

              {/* NÚMERO */}
              <div className="flex items-center justify-between mb-7">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#173C30]
                    text-[#DCE9DF]
                    flex items-center justify-center
                    text-xl
                    group-hover:bg-[#315C4A]
                    transition
                  "
                >
                  {etapa.icone}
                </div>

                <span className="text-5xl font-serif text-[#DCE7E0]">
                  {etapa.numero}
                </span>

              </div>

              <h3 className="text-2xl font-serif text-[#173C30] mb-3">
                {etapa.titulo}
              </h3>

              <p className="text-[#68756E] leading-relaxed">
                {etapa.descricao}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
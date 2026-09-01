import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const perguntas = [
  {
    id: 1,
    pergunta: "Com quanto tempo de antecedência devemos contratar a assessoria?",
    resposta:
      "Recomendamos começar o planejamento com antecedência para que possamos organizar todos os detalhes com calma e encontrar as melhores opções para o casal.",
  },
  {
    id: 2,
    pergunta: "A assessoria acompanha o casal durante todo o planejamento?",
    resposta:
      "Sim. Acompanhamos cada etapa do planejamento, ajudando nas decisões, na organização e no contato com os fornecedores.",
  },
  {
    id: 3,
    pergunta: "Vocês trabalham com diferentes estilos de casamento?",
    resposta:
      "Sim. Cada casamento é planejado de forma personalizada, respeitando o estilo, a personalidade e os desejos de cada casal.",
  },
  {
    id: 4,
    pergunta: "A equipe acompanha o casamento no grande dia?",
    resposta:
      "Sim. Nossa equipe acompanha a cerimônia e a celebração para cuidar dos detalhes e garantir que tudo aconteça conforme o planejamento.",
  },
  {
    id: 5,
    pergunta: "Vocês ajudam na escolha dos fornecedores?",
    resposta:
      "Sim. Podemos orientar o casal na escolha de fornecedores que estejam de acordo com o estilo, as necessidades e o planejamento do casamento.",
  },
  {
    id: 6,
    pergunta: "Como podemos solicitar um orçamento?",
    resposta:
      "É simples! Basta preencher nosso formulário de contato. Depois disso, entraremos em contato para conhecer melhor vocês e entender o que estão planejando.",
  },
];

export default function Perguntas() {
  const [aberta, setAberta] = useState(null);

  const alternarPergunta = (id) => {
    setAberta(aberta === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#F8FAF7]"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-14">

          <p className="text-sm uppercase tracking-[0.25em] text-[#315C4A] mb-3">
            Dúvidas frequentes
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#173C30] mb-5">
            Tudo o que vocês
            <span className="block italic text-[#315C4A]">
              precisam saber.
            </span>
          </h2>

          <p className="text-[#69766F] text-lg">
            Algumas respostas para ajudar vocês durante o planejamento.
          </p>

        </div>

        {/* PERGUNTAS */}
        <div className="space-y-4">

          {perguntas.map((item) => {
            const estaAberta = aberta === item.id;

            return (
              <div
                key={item.id}
                className="
                  bg-white
                  border border-[#DCE7E0]
                  rounded-2xl
                  overflow-hidden
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() => alternarPergunta(item.id)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-5
                    text-left
                    px-6 py-5
                    text-[#173C30]
                    hover:bg-[#F8FAF7]
                    transition
                  "
                >
                  <span className="font-medium text-lg">
                    {item.pergunta}
                  </span>

                  <FaChevronDown
                    className={`
                      flex-shrink-0
                      text-[#315C4A]
                      transition-transform
                      duration-300
                      ${estaAberta ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {estaAberta && (
                  <div className="px-6 pb-6">
                    <p className="text-[#69766F] leading-relaxed border-t border-[#E5ECE7] pt-4">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
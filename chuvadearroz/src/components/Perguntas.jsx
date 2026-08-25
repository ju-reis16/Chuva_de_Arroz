import { useState } from "react";
import { FaPlus, FaMinus, FaHeart } from "react-icons/fa";

const perguntas = [
  {
    pergunta: "Qual é o horário da cerimônia?",
    resposta:
      "As informações sobre o horário da cerimônia estarão disponíveis no convite. Recomendamos chegar alguns minutos antes para aproveitar o momento com tranquilidade.",
  },
  {
    pergunta: "Onde será realizada a celebração?",
    resposta:
      "O endereço completo e as informações sobre o local estarão disponíveis na seção de detalhes do evento.",
  },
  {
    pergunta: "Qual traje devo usar?",
    resposta:
      "Recomendamos um traje elegante e adequado para uma celebração de casamento. Consulte as informações do convite para orientações específicas.",
  },
  {
    pergunta: "Posso levar um acompanhante?",
    resposta:
      "A quantidade de acompanhantes deve ser informada no formulário de confirmação de presença.",
  },
  {
    pergunta: "É necessário confirmar minha presença?",
    resposta:
      "Sim. A confirmação ajuda na organização da celebração e permite preparar tudo com carinho para receber cada convidado.",
  },
  {
    pergunta: "Até quando posso confirmar minha presença?",
    resposta:
      "Pedimos que a confirmação seja realizada o quanto antes, respeitando a data indicada no convite.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState(null);

  const alternar = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F5F0]">

      <div className="max-w-4xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-12 h-px bg-[#B89B72]" />
            <FaHeart className="text-[#B89B72] text-sm" />
            <span className="w-12 h-px bg-[#B89B72]" />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-[#B89B72] mb-3">
            Dúvidas
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#292721] mb-5">
            Perguntas frequentes
          </h2>

          <p className="text-[#777169] text-lg">
            Tudo o que você precisa saber para aproveitar esse momento.
          </p>

        </div>

        {/* Perguntas */}
        <div className="space-y-4">

          {perguntas.map((item, index) => {
            const estaAberta = aberta === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-[#E5DDD4]
                  rounded-2xl
                  overflow-hidden
                  shadow-[0_8px_25px_rgba(41,39,33,0.04)]
                "
              >

                <button
                  type="button"
                  onClick={() => alternar(index)}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-5
                    p-6
                    text-left
                    hover:bg-[#FCFAF7]
                    transition
                  "
                >

                  <span className="font-medium text-[#292721]">
                    {item.pergunta}
                  </span>

                  <span
                    className="
                      shrink-0
                      w-9 h-9
                      rounded-full
                      bg-[#F8F5F0]
                      flex items-center justify-center
                      text-[#B89B72]
                    "
                  >
                    {estaAberta ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </span>

                </button>

                {estaAberta && (
                  <div className="px-6 pb-6">

                    <div className="h-px bg-[#E5DDD4] mb-5" />

                    <p className="text-[#777169] leading-relaxed">
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
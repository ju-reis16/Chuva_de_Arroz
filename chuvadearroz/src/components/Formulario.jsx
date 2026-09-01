import { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaCamera,
  FaArrowRight,
} from "react-icons/fa";

const casamentos = [
  {
    id: 1,
    casal: "Mariana & Gabriel",
    tipo: "Casamento no campo",
    descricao:
      "Uma celebração ao ar livre, cercada pela natureza e por momentos especiais.",
    imagem:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    casal: "Ana & Lucas",
    tipo: "Casamento clássico",
    descricao:
      "Uma celebração elegante, com detalhes clássicos e uma atmosfera sofisticada.",
    imagem:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    casal: "Beatriz & Rafael",
    tipo: "Destination Wedding",
    descricao:
      "Um casamento inesquecível em um destino especial, planejado para cada detalhe.",
    imagem:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    casal: "Camila & João",
    tipo: "Casamento na praia",
    descricao:
      "Uma celebração leve e romântica com o mar como cenário.",
    imagem:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    casal: "Laura & Pedro",
    tipo: "Mini Wedding",
    descricao:
      "Uma celebração intimista, planejada para reunir as pessoas mais importantes.",
    imagem:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    casal: "Sofia & Henrique",
    tipo: "Casamento contemporâneo",
    descricao:
      "Uma celebração moderna, elegante e cheia de personalidade.",
    imagem:
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Formulario() {
  const [pesquisa, setPesquisa] = useState("");
  const [buscaRealizada, setBuscaRealizada] = useState(false);

  const casamentosEncontrados = casamentos.filter((casamento) =>
    casamento.casal.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const handlePesquisa = (event) => {
    event.preventDefault();
    setBuscaRealizada(true);
  };

  return (
    <section
      id="memorias"
      className="py-24 bg-[#F8FAF7]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="max-w-3xl mx-auto text-center mb-12">

          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-[#173C30] text-[#DCE9DF] flex items-center justify-center">
              <FaCamera className="text-xl" />
            </div>
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-[#315C4A] mb-3">
            Suas memórias
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#173C30] leading-tight mb-5">
            Encontre o seu
            <span className="block italic text-[#315C4A]">
              grande dia.
            </span>
          </h2>

          <p className="text-lg text-[#69766F] leading-relaxed">
            Alguns momentos merecem ser revividos. Pesquise pelo nome dos
            noivos para encontrar registros dos casamentos que realizamos,
            conhecer nosso trabalho e reviver histórias especiais.
          </p>

        </div>

        {/* PESQUISA */}
        <form
          onSubmit={handlePesquisa}
          className="max-w-2xl mx-auto mb-14"
        >
          <div className="flex flex-col sm:flex-row gap-3">

            <div className="relative flex-1">

              <FaSearch
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#7D9187]
                "
              />

              <input
                type="text"
                value={pesquisa}
                onChange={(event) => {
                  setPesquisa(event.target.value);
                  setBuscaRealizada(false);
                }}
                placeholder="Digite o nome dos noivos..."
                className="
                  w-full
                  pl-12
                  pr-5
                  py-4
                  rounded-xl
                  bg-white
                  border border-[#DCE7E0]
                  text-[#173C30]
                  placeholder:text-[#9AA8A1]
                  outline-none
                  focus:border-[#315C4A]
                  focus:ring-2
                  focus:ring-[#315C4A]/10
                  transition
                "
              />

            </div>

            <button
              type="submit"
              className="
                px-7
                py-4
                rounded-xl
                bg-[#173C30]
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-3
                hover:bg-[#315C4A]
                hover:-translate-y-0.5
                transition-all
                duration-300
                shadow-lg
              "
            >
              Pesquisar
              <FaSearch className="text-sm" />
            </button>

          </div>
        </form>

        {/* RESULTADOS */}
        {buscaRealizada && pesquisa.trim() !== "" && (
          <div className="mb-8 text-center">

            <p className="text-[#69766F]">
              {casamentosEncontrados.length > 0
                ? `${casamentosEncontrados.length} casamento(s) encontrado(s)`
                : "Nenhum casamento encontrado."}
            </p>

          </div>
        )}

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {casamentosEncontrados.map((casamento) => (
            <div
              key={casamento.id}
              className="
                group
                bg-white
                border border-[#DCE7E0]
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* IMAGEM */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={casamento.imagem}
                  alt={`Casamento de ${casamento.casal}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173C30]/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">

                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#315C4A]">
                    {casamento.tipo}
                  </span>

                </div>

              </div>

              {/* CONTEÚDO */}
              <div className="p-6">

                <div className="flex items-center gap-2 mb-3 text-[#315C4A]">
                  <FaHeart className="text-sm" />

                  <span className="text-xs uppercase tracking-[0.15em]">
                    Nossa história
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#173C30] mb-3">
                  {casamento.casal}
                </h3>

                <p className="text-[#69766F] leading-relaxed mb-5">
                  {casamento.descricao}
                </p>

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#315C4A]
                    font-medium
                    hover:gap-3
                    transition-all
                  "
                >
                  Ver casamento
                  <FaArrowRight className="text-xs" />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* MENSAGEM QUANDO NÃO ENCONTRA */}
        {buscaRealizada &&
          pesquisa.trim() !== "" &&
          casamentosEncontrados.length === 0 && (
            <div className="text-center py-10">

              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E4EFE8] text-[#315C4A] flex items-center justify-center">
                <FaSearch />
              </div>

              <h3 className="text-2xl font-serif text-[#173C30] mb-2">
                Não encontramos esse casamento
              </h3>

              <p className="text-[#69766F]">
                Confira o nome dos noivos e tente pesquisar novamente.
              </p>

            </div>
          )}

        {/* FRASE FINAL */}
        <div className="mt-14 text-center">

          <p className="text-[#315C4A] font-serif italic text-lg">
            Cada casamento é uma história. Cada história merece ser lembrada.
          </p>

        </div>

      </div>
    </section>
  );
}
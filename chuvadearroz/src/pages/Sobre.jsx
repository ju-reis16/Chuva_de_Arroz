import {
  FaHeart,
  FaGem,
  FaUsers,
  FaLightbulb,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const valores = [
  {
    id: 1,
    titulo: "Cuidado",
    descricao:
      "Cuidamos de cada detalhe para tornar o planejamento mais leve, organizado e especial.",
    icone: <FaHeart />,
  },
  {
    id: 2,
    titulo: "Confiança",
    descricao:
      "Construímos uma relação de confiança, oferecendo informações úteis e uma experiência acolhedora.",
    icone: <FaCheck />,
  },
  {
    id: 3,
    titulo: "Qualidade",
    descricao:
      "Buscamos oferecer conteúdos, ideias e soluções que realmente contribuam para o planejamento.",
    icone: <FaGem />,
  },
  {
    id: 4,
    titulo: "Criatividade",
    descricao:
      "Valorizamos novas ideias e diferentes estilos para que cada casal encontre inspiração para seu grande dia.",
    icone: <FaLightbulb />,
  },
];

function Sobre() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] font-sans text-[#254238]">
      <Header />

      {/* HERO */}
      <section className="bg-[#dcecdf] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <div className="mb-4 mt-15 font-sans text-sm font-semibold text-[#b76e79]">
              Sobre nós
            </div>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Conheça o
              <br />
              <span className="text-[#254c3b]">Chuva de Arroz</span>
            </h1>

            <p className="mt-6 max-w-xl font-sans text-base leading-7 text-[#687b70]">
              Um espaço criado para tornar o planejamento do casamento mais
              leve, organizado, inspirador e especial para cada casal.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-[#fbfaf4] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="flex h-72 items-center justify-center bg-[#dcecdf] md:h-96">
              <div className="relative z-10 text-center">
                <FaHeart className="mx-auto text-4xl text-[#b76e79]" />

                <h2 className="mt-4 text-3xl font-semibold text-[#254c3b]">
                  Chuva de Arroz
                </h2>

                <p className="mt-3 font-sans text-xs uppercase tracking-[4px] text-[#687b70]">
                  Desde 2022
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="font-sans text-sm font-semibold text-[#b76e79]">
              Nossa história
            </span>

            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Um sonho que começou
              <br />
              <span>em 2022.</span>
            </h2>

            <div className="mt-7 space-y-5">
              <p className="font-sans text-sm leading-8 text-[#687b70]">
                O <strong className="text-[#254238]">Chuva de Arroz</strong>{" "}
                nasceu em <strong className="text-[#254238]">2022</strong>, a
                partir do sonho de criar um espaço que ajudasse casais a
                transformar seus planos de casamento em momentos inesquecíveis.
              </p>

              <p className="font-sans text-sm leading-8 text-[#687b70]">
                A ideia surgiu ao perceber que organizar uma celebração envolve
                muitas escolhas e detalhes, e que os noivos precisavam de um
                lugar que reunisse inspiração, praticidade e informações
                importantes.
              </p>

              <p className="font-sans text-sm leading-8 text-[#687b70]">
                Desde então, o Chuva de Arroz vem crescendo e se tornando um
                espaço dedicado a acompanhar os casais em cada etapa dessa
                jornada.
              </p>

              <p className="font-sans text-sm leading-8 text-[#687b70]">
                Mais do que um site, nasceu com o propósito de tornar o
                planejamento do casamento mais leve, organizado e especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="bg-[#edf5eb] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-sans text-sm font-semibold text-[#b76e79]">
                Nossa missão
              </span>

              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Tornar tudo
                <br />
                <span>mais simples.</span>
              </h2>
            </div>

            <div>
              <p className="font-sans text-base leading-7 text-[#687b70]">
                Nossa missão é tornar a organização do casamento mais simples,
                inspiradora e tranquila para os noivos. Buscamos reunir
                informações, ideias e serviços que ajudem cada casal a planejar
                sua celebração de acordo com seus sonhos, personalidade e
                estilo.
              </p>

              <p className="mt-4 font-sans text-base leading-7 text-[#687b70]">
                Queremos facilitar cada escolha, desde os primeiros
                preparativos até os pequenos detalhes do grande dia, oferecendo
                uma experiência prática, acolhedora e especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[#fbfaf4] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold text-[#b76e79]">
              O que acreditamos
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Nossos valores
            </h2>

            <p className="mt-5 font-sans text-sm leading-7 text-[#687b70]">
              Nossos valores são a base de tudo o que fazemos e refletem o
              compromisso que temos com cada casal.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor) => (
              <article
                key={valor.id}
                className="border border-[#d7e3d8] bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#f3dfe2] text-[#b76e79]">
                  {valor.icone}
                </div>

                <h3 className="mt-6 font-sans text-xl text-[#254238]">
                  {valor.titulo}
                </h3>

                <p className="mt-3 font-sans text-sm leading-7 text-[#687b70]">
                  {valor.descricao}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center font-sans text-sm leading-7 text-[#687b70]">
            Acreditamos que cada casamento deve ser único e representar a
            história e a personalidade dos noivos. Por isso, valorizamos a
            diversidade de estilos, a atenção aos detalhes e a busca constante
            por soluções que tornem o planejamento mais agradável.
          </p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="border-y border-[#d7e3d8] bg-[#fbfaf4] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex h-14 w-14 items-center justify-center bg-[#f3dfe2] text-xl text-[#b76e79]">
              <FaUsers />
            </div>

            <span className="mt-5 block font-sans text-sm font-semibold text-[#b76e79]">
              Quem está por trás
            </span>

            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Nossa
              <br />
              <span>equipe.</span>
            </h2>
          </div>

          <div>
            <p className="font-sans text-base leading-7 text-[#687b70]">
              Nossa equipe é formada por pessoas apaixonadas por casamentos,
              organização e criatividade. Cada integrante contribui com seus
              conhecimentos e dedicação para tornar o Chuva de Arroz um espaço
              completo e útil para os noivos.
            </p>

            <p className="mt-4 font-sans text-base leading-7 text-[#687b70]">
              Trabalhamos juntos na criação de conteúdos, seleção de
              inspirações, organização das informações e desenvolvimento de
              soluções que facilitem o planejamento.
            </p>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-[#b76e79] pl-4">
              <p className="font-sans text-base font-medium leading-7 text-[#254238]">
                Mais do que uma equipe, somos pessoas comprometidas em ajudar
                cada casal a transformar seus sonhos em momentos reais e
                inesquecíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dcecdf] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="px-4 py-8">
            <FaHeart className="mx-auto text-[#b76e79]" />

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Seu grande dia começa
              <br />
              com um sonho.
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-[#687b70]">
              E o Chuva de Arroz está aqui para ajudar você a transformar esse
              sonho em realidade.
            </p>

            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-3 bg-[#254c3b] px-6 py-3 font-sans text-sm font-medium text-white cursor-pointer hover:bg-[#1a3629] transition-colors"
            >
              Entre em contato
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Sobre;
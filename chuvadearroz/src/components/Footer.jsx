import {
  FaInstagram,
  FaPinterestP,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contato"
      className="bg-[#173C30] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* MARCA */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#DCE9DF]
                  flex items-center justify-center
                "
              >
                <FaHeart className="text-[#173C30]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif">
                  Chuva de Arroz
                </h3>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                  Assessoria & Cerimonial
                </p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Cuidamos dos detalhes para que vocês possam viver o amor,
              celebrar cada momento e guardar memórias para sempre.
            </p>
          </div>
          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#inicio"
                className="text-white/60 hover:text-white transition"
              >
                Início
              </a>

              <a
                href="#sobre"
                className="text-white/60 hover:text-white transition"
              >
                Sobre nós
              </a>
              <a
                href="#servicos"
                className="text-white/60 hover:text-white transition"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="text-white/60 hover:text-white transition"
              >
                Momentos
              </a>
              <a
                href="#avaliacoes"
                className="text-white/60 hover:text-white transition"
              >
                Avaliações
              </a>
              <a
                href="#faq"
                className="text-white/60 hover:text-white transition"
              >
                Perguntas frequentes
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Vamos conversar
            </h4>

            <p className="text-white/60 leading-relaxed mb-5">
              Estamos prontas para conhecer a história de vocês.
            </p>

            <Link
              to="/contato"
              className="
                inline-flex
                px-5 py-3
                rounded-xl
                bg-[#DCE9DF]
                text-[#173C30]
                font-medium
                hover:bg-white
                transition
              "
            >
              Entrar em contato
            </Link>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/15
                  flex items-center justify-center
                  text-white/70
                  hover:bg-white
                  hover:text-[#173C30]
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/15
                  flex items-center justify-center
                  text-white/70
                  hover:bg-white
                  hover:text-[#173C30]
                  transition
                "
              >
                <FaPinterestP />
              </a>

            </div>
          </div>

        </div>

        {/* LINHA */}
        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white/40">
            © 2026 Chuva de Arroz. Todos os direitos reservados.
          </p>
          <button
            onClick={voltarAoTopo}
            className="
              flex
              items-center
              gap-2
              text-sm
              text-white/50
              hover:text-white
              transition
            "
          >
            Voltar ao topo
            <FaArrowUp className="text-xs" />
          </button>

        </div>

      </div>
    </footer>
  );
}
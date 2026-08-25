import {
  FaHeart,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1D352B] text-white">

      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-full bg-[#A8C3A0] flex items-center justify-center">
                <FaHeart className="text-[#25483A] text-sm" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Chuva de Arroz
                </h2>

                <p className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Casamentos
                </p>
              </div>

            </div>

            <p className="text-white/60 leading-relaxed max-w-sm">
              Criamos celebrações únicas, cuidando de cada detalhe
              para transformar sonhos em momentos inesquecíveis.
            </p>

          </div>

          {/* Navegação */}
          <div>

            <h3 className="font-serif text-xl mb-5">
              Navegação
            </h3>

            <div className="flex flex-col gap-3">

              <a href="/" className="text-white/60 hover:text-[#A8C3A0] transition">
                Início
              </a>

              <a href="/sobre" className="text-white/60 hover:text-[#A8C3A0] transition">
                Sobre nós
              </a>

              <a href="/#servicos" className="text-white/60 hover:text-[#A8C3A0] transition">
                Serviços
              </a>

              <a href="/#portfolio" className="text-white/60 hover:text-[#A8C3A0] transition">
                Portfólio
              </a>

              <a href="/#depoimentos" className="text-white/60 hover:text-[#A8C3A0] transition">
                Depoimentos
              </a>

              <a href="/contato" className="text-white/60 hover:text-[#A8C3A0] transition">
                Contato
              </a>

            </div>

          </div>

          {/* Contato */}
          <div>

            <h3 className="font-serif text-xl mb-5">
              Contato
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#A8C3A0]" />
                contato@chuvadearroz.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-[#A8C3A0]" />
                (11) 99999-9999
              </p>

            </div>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/20
                  flex items-center justify-center
                  hover:bg-[#A8C3A0]
                  hover:text-[#25483A]
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/20
                  flex items-center justify-center
                  hover:bg-[#A8C3A0]
                  hover:text-[#25483A]
                  transition
                "
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">

          <p className="text-sm text-white/40">
            © 2026 Chuva de Arroz. Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}
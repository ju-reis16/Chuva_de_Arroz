import { FaHeart, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto mt-4 px-5 py-3 rounded-2xl bg-[#173C30]/70 backdrop-blur-xl border border-[#A8C3A0]/20 shadow-lg flex items-center justify-between">

        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#A8C3A0] flex items-center justify-center">
            <FaHeart className="text-[#173C30] text-xs" />
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white leading-none">
              Chuva de Arroz
            </h1>
            <p className="text-[8px] tracking-[0.25em] uppercase text-white/60 mt-1">
              Casamentos
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          <a href="/" className="text-white/90 hover:text-[#A8C3A0] transition">
            Início
          </a>
          <a href="/sobre" className="text-white/90 hover:text-[#A8C3A0] transition">
            Sobre nós
          </a>
          <a href="/#servicos" className="text-white/90 hover:text-[#A8C3A0] transition">
            Serviços
          </a>
          <a href="/#portfolio" className="text-white/90 hover:text-[#A8C3A0] transition">
            Portfólio
          </a>
          <a href="/#depoimentos" className="text-white/90 hover:text-[#A8C3A0] transition">
            Depoimentos
          </a>
          <a href="/contato" className="text-white/90 hover:text-[#A8C3A0] transition">
            Contato
          </a>
        </nav>

        <a
          href="/contato"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-[#A8C3A0] text-[#173C30] text-xs font-semibold hover:bg-white transition"
        >
          Vamos conversar
        </a>

        <button
          className="lg:hidden text-white text-lg"
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
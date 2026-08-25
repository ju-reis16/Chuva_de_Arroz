import { FaHeart, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto mt-4 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#D8C8B8]/50 shadow-lg flex items-center justify-between">

       <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-[#B89B72] flex items-center justify-center">
            <FaHeart className="text-white text-sm" />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-[#292721]">
              Lumière
            </h1>

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A8175]">
              Weddings
            </p>
          </div>
        </a>

         <nav className="hidden md:flex items-center gap-8 text-sm text-[#5F5A52]">
          <a
            href="/"
            className="hover:text-[#B89B72] transition"
          >
            Início
          </a>

          <a
            href="/sobre"
            className="hover:text-[#B89B72] transition"
          >
            Sobre nós
          </a>

          <a
            href="/#servicos"
            className="hover:text-[#B89B72] transition"
          >
            Serviços
          </a>

          <a
            href="/#portfolio"
            className="hover:text-[#B89B72] transition"
          >
            Portfólio
             </a>

          <a
            href="/#depoimentos"
            className="hover:text-[#B89B72] transition"
          >
            Depoimentos
          </a>

          <a
            href="/contato"
            className="hover:text-[#B89B72] transition"
          >
            Contato
          </a>
        </nav>

         <a
          href="/contato"
          className="hidden md:inline-flex px-5 py-3 rounded-xl bg-[#292721] text-white text-sm font-medium hover:bg-[#B89B72] transition duration-300"
        >
          Vamos conversar
        </a>

        {/* Menu mobile */}
        <button
          className="md:hidden text-[#292721] text-xl"
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>

      </div>
    </header>
  );
}
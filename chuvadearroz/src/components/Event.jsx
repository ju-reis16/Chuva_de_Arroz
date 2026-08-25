export default function Event() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          rounded-2xl
          bg-[#FFFDFC]/90
          backdrop-blur-xl
          border border-[#E8DFD3]
          shadow-[0_8px_30px_rgba(81,72,62,0.08)]
          flex justify-between items-center
        "
      >
        <a
          href="#home"
          className="text-2xl font-semibold tracking-wide text-[#51483E]"
        >
          <span className="text-[#B89B63]">Su</span>hui
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#756D63]">
          <a href="#home" className="hover:text-[#B89B63] transition">
            Início
          </a>

          <a href="#sobre" className="hover:text-[#B89B63] transition">
            Sobre nós
          </a>

          <a href="#servicos" className="hover:text-[#B89B63] transition">
            Serviços
          </a>

          <a href="#momentos" className="hover:text-[#B89B63] transition">
            Momentos
          </a>

          <a href="#contato" className="hover:text-[#B89B63] transition">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="
            hidden sm:inline-flex
            px-5 py-2.5
            rounded-full
            bg-[#B89B63]
            text-white
            text-sm font-medium
            hover:bg-[#A78955]
            hover:scale-105
            transition-all duration-300
          "
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}
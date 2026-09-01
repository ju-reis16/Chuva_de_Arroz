import { useState } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const links = [
    { nome: "Início", destino: "/home" },
    { nome: "Sobre nós", destino: "/sobre" },
    { nome: "Contato", destino: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className="
            flex items-center justify-between
            px-5 md:px-7 py-4
            rounded-2xl
            bg-[#173C30]/95
            backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_35px_rgba(23,60,48,0.18)]
          "
        >

          {/* LOGO */}
          <a
            href="#inicio"
            onClick={fecharMenu}
            className="flex items-center gap-3"
          >
            <div
              className="
                w-10 h-10
                rounded-full
                bg-[#DCE9DF]
                flex items-center justify-center
              "
            >
              <FaHeart className="text-[#173C30] text-sm" />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-serif text-white">
                Chuva de Arroz
              </h1>

              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60">
                Assessoria & Cerimonial
              </p>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.destino}
                className="
                  text-sm
                  text-white/75
                  hover:text-[#DCE9DF]
                  transition
                  duration-300
                "
              >
                {link.nome}
              </a>
            ))}
          </nav>

          {/* BOTÃO */}
          <a
            href="/contato"
            className="
              hidden md:inline-flex
              items-center
              px-5 py-2.5
              rounded-xl
              border border-[#DCE9DF]/40
              text-white
              text-sm
              font-medium
              hover:bg-[#DCE9DF]
              hover:text-[#173C30]
              transition
              duration-300
            "
          >
            Vamos conversar
          </a>

          {/* MENU MOBILE */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              border border-white/20
              flex items-center justify-center
              text-white
              hover:bg-white/10
              transition
            "
            aria-label="Abrir menu"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MENU MOBILE ABERTO */}
        {menuAberto && (
          <nav
            className="
              lg:hidden
              mt-2
              p-4
              rounded-2xl
              bg-[#173C30]/98
              backdrop-blur-xl
              border border-white/10
              shadow-xl
            "
          >
            <div className="flex flex-col gap-1">

              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.destino}
                  onClick={fecharMenu}
                  className="
                    px-4 py-3
                    rounded-xl
                    text-white/80
                    hover:bg-white/10
                    hover:text-white
                    transition
                  "
                >
                  {link.nome}
                </a>
              ))}

              <a
                href="/contato"
                onClick={fecharMenu}
                className="
                  mt-2
                  px-4 py-3
                  rounded-xl
                  bg-[#DCE9DF]
                  text-[#173C30]
                  font-medium
                  text-center
                  hover:bg-white
                  transition
                "
              >
                Vamos conversar
              </a>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
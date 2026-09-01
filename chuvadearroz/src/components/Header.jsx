import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const links = [
    { nome: "Início", destino: "/" },
    { nome: "Sobre nós", destino: "/sobre" },
    { nome: "Contato", destino: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER GLASSMORPHISM */}
        <div
          className="
            flex items-center justify-between
            px-5 md:px-7 py-4
            rounded-2xl
            bg-black/15
            backdrop-blur-2xl
            backdrop-saturate-150
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.18)]
          "
        >

         
          <Link
            to="/"
            onClick={fecharMenu}
            className="flex items-center gap-3"
          >
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-green-950">
                Chuva de Arroz
              </h1>

              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-green-950/60">
                Assessoria & Cerimonial
              </p>
            </div>
          </Link>

         
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.nome}
                to={link.destino}
                className="
                  relative
                  text-sm
                  text-green-950/75
                  hover:text-green-950
                  transition
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:w-0
                  after:h-px
                  after:bg-[#DCE9DF]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.nome}
              </Link>
            ))}
          </nav>

          <Link
            to="/contato"
            className="
              hidden md:inline-flex
              items-center
              px-5 py-2.5
              rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/25
              text-green-950
              text-sm
              font-medium
              hover:bg-white
              hover:text-[#173C30]
              transition
              duration-300
            "
          >
            Vamos conversar
          </Link>

          {/* MENU MOBILE */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/20
              flex items-center justify-center
              text-white
              hover:bg-white/20
              transition
            "
            aria-label="Abrir menu"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      
        {menuAberto && (
          <nav
            className="
              lg:hidden
              mt-2
              p-4
              rounded-2xl
              bg-[#173C30]/75
              backdrop-blur-2xl
              backdrop-saturate-150
              border border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.18)]
            "
          >
            <div className="flex flex-col gap-1">

              {links.map((link) => (
                <Link
                  key={link.nome}
                  to={link.destino}
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
                </Link>
              ))}

              <Link
                to="/contato"
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
              </Link>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
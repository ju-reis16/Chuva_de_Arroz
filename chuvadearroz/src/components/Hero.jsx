import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        pt-32 pb-20
        bg-[#F8FAF7]
        relative
        overflow-hidden
        flex items-center
      "
    >
      {/* Decorações */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#DCE9DF]/70 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#BFD4C8]/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXTO */}
          <div className="max-w-xl">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                bg-white
                border border-[#D8E4DD]
                text-[#315C4A]
                text-sm
                mb-7
                shadow-sm
              "
            >
              <FaHeart className="text-[#315C4A] text-xs" />
              Assessoria & Cerimonial
            </div>

            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-serif
                text-[#173C30]
                leading-[1.05]
                mb-7
              "
            >
              Seu grande dia,
              <span className="block italic text-[#315C4A]">
                exatamente como sonhou.
              </span>
            </h1>

            <p
              className="
                text-lg
                text-[#65736B]
                leading-relaxed
                mb-9
                max-w-lg
              "
            >
              Planejamos cada detalhe do seu casamento para que vocês possam
              viver cada momento com tranquilidade, emoção e a certeza de que
              tudo estará em boas mãos.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#servicos"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6 py-3.5
                  rounded-xl
                  bg-[#173C30]
                  text-white
                  font-medium
                  hover:bg-[#315C4A]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                Conheça nossos serviços
                <FaArrowRight className="text-sm" />
              </a>

              <Link
                to="/contato"
                className="
                  inline-flex
                  items-center
                  px-6 py-3.5
                  rounded-xl
                  border border-[#315C4A]
                  text-[#315C4A]
                  font-medium
                  hover:bg-[#173C30]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Vamos conversar
              </Link>

            </div>

          </div>
          {/* IMAGEM */}
          <div className="relative">

            <div
              className="
                absolute
                -inset-4
                border
                border-[#315C4A]/20
                rounded-[2rem]
                rotate-2
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
                border
                border-white
              "
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Casamento ao ar livre"
                className="
                  w-full
                  h-[500px]
                  md:h-[570px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#173C30]/40
                  to-transparent
                "
              />
            </div>

            {/* CARD SOBRE A FOTO */}
            <div
              className="
                absolute
                bottom-6
                left-5
                right-5
                md:right-auto
                md:max-w-sm
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                px-5 py-4
                shadow-xl
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#65736B]
                  mb-1
                "
              >
                Chuva de Arroz
              </p>

              <p className="font-serif text-xl text-[#173C30]">
                Momentos que ficam para sempre.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
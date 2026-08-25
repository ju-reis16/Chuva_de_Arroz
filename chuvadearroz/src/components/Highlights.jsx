import {
  FaHeart,
  FaLeaf,
  FaGem,
  FaCamera
} from "react-icons/fa";

const items = [
  {
    icon: <FaHeart />,
    title: "Planejamento personalizado",
    desc: "Cada casamento é planejado de acordo com a personalidade, os sonhos e o estilo de cada casal."
  },
  {
    icon: <FaLeaf />,
    title: "Atenção aos detalhes",
    desc: "Cuidamos de cada pequeno detalhe para que tudo esteja exatamente como vocês imaginaram."
  },
  {
    icon: <FaGem />,
    title: "Fornecedores selecionados",
    desc: "Trabalhamos com profissionais de confiança para garantir qualidade em todos os momentos."
  },
  {
    icon: <FaCamera />,
    title: "Momentos inesquecíveis",
    desc: "Criamos experiências pensadas para que cada momento do grande dia seja especial."
  }
];

export default function Highlights() {
  return (
    <section
      id="destaques"
      className="py-24 bg-[#FAFAF7]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-sm uppercase tracking-[0.3em] text-[#527A63] mb-3">
            Nosso diferencial
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#25483A] mb-5">
            Cuidamos de cada detalhe
          </h2>

          <p className="text-[#68736C] leading-relaxed">
            Do planejamento à celebração, nossa equipe transforma
            sonhos em experiências únicas.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-7">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-[#DCE5DC]
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-[#E8F0E6]
                  text-[#527A63]
                  flex items-center justify-center
                  text-xl
                  mb-6
                  group-hover:bg-[#25483A]
                  group-hover:text-white
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif text-[#25483A] mb-3">
                {item.title}
              </h3>

              <p className="text-[#68736C] leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

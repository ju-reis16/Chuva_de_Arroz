import { FaArrowRight } from "react-icons/fa";

export default function Card({ titulo, descricao, imagem, categoria }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-[#E5DDD4] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-medium text-[#6F604E]">
          {categoria}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-serif text-[#292721] mb-3">
          {titulo}
        </h3>

        <p className="text-[#777169] leading-relaxed mb-6">
          {descricao}
        </p>

        <button className="flex items-center gap-3 text-sm font-semibold text-[#8F7757] group-hover:text-[#B89B72] transition">
          Saiba mais
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </article>
  );
}
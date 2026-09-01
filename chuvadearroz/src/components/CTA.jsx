import { FaHeart } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] min-h-[480px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600"
            alt="Casamento"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#10251C]/65" />

          <div className="relative z-10 text-center max-w-2xl px-6">
            <FaHeart className="mx-auto text-[#A8C3A0] text-2xl mb-6" />

            <p className="text-sm uppercase tracking-[0.3em] text-[#A8C3A0] mb-4">
              Chuva de Arroz
            </p>

            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Vamos tornar esse
              <span className="text-[#A8C3A0]"> momento inesquecível?</span>
            </h2>

            <p className="text-white/80 leading-relaxed mb-8">
              Conte para nós como você imagina o seu casamento e vamos
              transformar seus sonhos em uma celebração única.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#A8C3A0] text-[#25483A] font-semibold hover:bg-white transition"
            >
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
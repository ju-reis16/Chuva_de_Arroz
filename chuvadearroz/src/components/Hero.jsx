export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FBF8] pt-32"
    >
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#A8C3A0]/25 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#DCE9DF]/40 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="max-w-xl">
            <span className="inline-flex px-4 py-2 rounded-full bg-[#EAF3ED] border border-[#C9DED1] text-[#2E6B55] text-sm mb-7">
              ✦ Casamentos feitos para serem inesquecíveis
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-serif text-[#173C30] mb-7">
              Seu momento.
              <br />
              <span className="text-[#2E6B55] italic">
                Do seu jeito.
              </span>
            </h1>

            <p className="text-lg text-[#64756D] leading-relaxed mb-9">
              Na Chuva de Arroz, transformamos sonhos em celebrações únicas.
              Cuidamos de cada detalhe para que você aproveite cada instante.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#servicos"
                className="px-7 py-3.5 rounded-full bg-[#173C30] text-white font-medium hover:bg-[#2E6B55] hover:-translate-y-1 transition"
              >
                Conheça nossos serviços
              </a>

              <a
                href="#sobre"
                className="px-7 py-3.5 rounded-full border border-[#A8C3A0] text-[#173C30] bg-white hover:bg-[#EAF3ED] transition"
              >
                Conheça a Chuva de Arroz
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-[#A8C3A0]/50 rotate-2" />

            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_25px_70px_rgba(23,60,48,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Decoração elegante de casamento"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#173C30] rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A8C3A0]">
                Chuva de Arroz
              </p>
              <p className="text-white font-medium mt-1">
                Celebrando histórias de amor
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
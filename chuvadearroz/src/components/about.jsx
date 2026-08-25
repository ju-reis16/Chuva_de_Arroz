export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#F8FBF8]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#2E6B55] mb-3">
            Quem somos
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#173C30]">
            Mais do que um casamento,
            <span className="block text-[#2E6B55] italic">
              uma história para lembrar.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <div className="absolute -left-4 -bottom-4 w-full h-full rounded-[2rem] border border-[#A8C3A0]" />

            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop"
              alt="Decoração de casamento"
              className="relative w-full h-[480px] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(23,60,48,0.12)]"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#173C30] mb-6">
              Cada detalhe tem
              <span className="text-[#2E6B55] italic"> um significado.</span>
            </h3>

            <p className="text-[#64756D] leading-relaxed mb-5">
              A Chuva de Arroz nasceu para transformar casamentos em
              momentos únicos, leves e cheios de significado.
            </p>

            <p className="text-[#64756D] leading-relaxed mb-8">
              Cuidamos de cada etapa com carinho, criatividade e atenção
              aos detalhes, para que vocês possam aproveitar o que
              realmente importa: celebrar o amor.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="p-6 rounded-2xl bg-white border border-[#DCE9DF]">
                <span className="text-2xl text-[#2E6B55]">✦</span>

                <h4 className="font-semibold text-[#173C30] mt-3 mb-2">
                  Nossa missão
                </h4>

                <p className="text-sm text-[#64756D] leading-relaxed">
                  Criar celebrações especiais, cuidando de cada detalhe
                  para tornar o grande dia inesquecível.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#EAF3ED] border border-[#C9DED1]">
                <span className="text-2xl text-[#2E6B55]">♡</span>

                <h4 className="font-semibold text-[#173C30] mt-3 mb-2">
                  Nossa essência
                </h4>

                <p className="text-sm text-[#64756D] leading-relaxed">
                  Elegância, cuidado e personalidade para que cada
                  casamento tenha a identidade do casal.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
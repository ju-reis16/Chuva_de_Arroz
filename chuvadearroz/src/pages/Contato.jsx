import Header from "../components/Header";

export default function Contato() {
	return (
		<main className="min-h-screen bg-[#F8F5F0] px-6 pb-20 pt-36 text-[#292721]">
			<Header />
			<section className="mx-auto max-w-4xl">
				<p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#B89B72]">Contato</p>
				<h1 className="mb-6 text-5xl font-serif text-[#51483E]">Vamos conversar sobre o seu dia</h1>
				<p className="max-w-2xl text-lg leading-relaxed text-[#756D63]">
					Conte um pouco sobre os seus planos. Nossa equipe entrará em contato para começar a
					construir essa celebração com vocês.
				</p>
			</section>
		</main>
	);
}

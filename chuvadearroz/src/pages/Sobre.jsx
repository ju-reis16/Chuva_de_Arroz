import Header from "../components/Header";

export default function Sobre() {
	return (
		<main className="min-h-screen bg-[#F8F5F0] px-6 pb-20 pt-36 text-[#292721]">
			<Header />
			<section className="mx-auto max-w-4xl">
				<p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#B89B72]">Sobre nós</p>
				<h1 className="mb-6 text-5xl font-serif text-[#51483E]">Histórias que merecem ser celebradas</h1>
				<p className="max-w-2xl text-lg leading-relaxed text-[#756D63]">
					Cuidamos de cada detalhe para transformar o seu casamento em uma experiência leve,
					elegante e fiel à história de vocês.
				</p>
			</section>
		</main>
	);
}

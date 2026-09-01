import { useState } from "react";
import { z } from "zod";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";

const contatoSchema = z.object({
  nome: z.string().min(3, "Digite seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  telefone: z.string().min(10, "Informe um telefone válido."),
  assunto: z.string().min(3, "Informe o assunto da mensagem."),
  mensagem: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

const informacoes = [
  {
    id: 1,
    titulo: "Telefone",
    descricao: "(11) 99876-5432",
    icone: <FaPhone />,
  },
  {
    id: 2,
    titulo: "E-mail",
    descricao: "chuvadearroz@gmail.com",
    icone: <FaEnvelope />,
  },
  {
    id: 3,
    titulo: "Localização",
    descricao: "São Paulo - SP",
    icone: <FaMapMarkerAlt />,
  },
  {
    id: 4,
    titulo: "Atendimento",
    descricao: "Seg. a Sex. das 9h às 18h",
    icone: <FaClock />,
  },
];

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (evento) => {
    const { name, value } = evento.target;

    setFormulario((dados) => ({
      ...dados,
      [name]: value,
    }));

    if (erros[name]) {
      setErros((dados) => ({
        ...dados,
        [name]: "",
      }));
    }

    if (enviado) {
      setEnviado(false);
    }
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const resultado = contatoSchema.safeParse(formulario);

    if (!resultado.success) {
      const novosErros = {};

      resultado.error.issues.forEach((erro) => {
        const campo = erro.path[0];
        novosErros[campo] = erro.message;
      });

      setErros(novosErros);
      setEnviado(false);

      return;
    }

    setErros({});
    setEnviado(true);

    setFormulario({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FDFBF9] text-[#4F5C54]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#F7FAF7] px-6 py-24 md:px-12 lg:px-20">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#EFDDE2] opacity-70 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#DCE9DF] opacity-80 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="mb-4 mt-16 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[3px] text-[#B98F99]">
                <FaHeart />
                Entre em contato
              </span>

              <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#173C30] md:text-6xl">
                Vamos conversar sobre o seu{" "}
                <span className="text-[#B98F99]">grande dia</span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-[#68756D] md:text-lg">
                Conte para nós como você imagina o seu casamento. Nossa equipe
                está pronta para ajudar a transformar cada detalhe em um
                momento inesquecível.
              </p>
            </div>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* INFORMAÇÕES */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[2px] text-[#B98F99]">
                Fale conosco
              </span>

              <h2 className="mt-3 text-3xl font-semibold text-[#173C30] md:text-4xl">
                Estamos aqui para ajudar
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#68756D]">
                Seja para tirar dúvidas, conhecer nossos serviços ou começar a
                planejar sua celebração, entre em contato. Será um prazer fazer
                parte dessa história com vocês.
              </p>

              <div className="mt-8 space-y-4">
                {informacoes.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl border border-[#DCE9DF] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DCE9DF] text-[#173C30]">
                      {item.icone}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#173C30]">
                        {item.titulo}
                      </h3>

                      <p className="mt-1 text-sm text-[#68756D]">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="rounded-3xl border border-[#DCE9DF] bg-white p-6 shadow-lg md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#173C30] md:text-3xl">
                  Envie uma mensagem
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#68756D]">
                  Preencha os campos abaixo e nossa equipe entrará em contato.
                </p>
              </div>

              {/* MENSAGEM DE SUCESSO */}
              {enviado && (
                <div className="mb-6 rounded-xl border border-[#C8DDCC] bg-[#F1F8F2] p-4 text-sm text-[#52725A]">
                  Sua mensagem foi enviada com sucesso! Em breve entraremos em
                  contato com você.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NOME */}
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium text-[#173C30]"
                  >
                    Nome completo
                  </label>

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formulario.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className={`w-full rounded-xl border bg-[#FCF8F8] px-4 py-3 text-[#173C30] outline-none transition focus:ring-2 ${
                      erros.nome
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#EADDE0] focus:border-[#A8C3A0] focus:ring-[#DCE9DF]"
                    }`}
                  />

                  {erros.nome && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.nome}
                    </p>
                  )}
                </div>

                {/* EMAIL E TELEFONE */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#173C30]"
                    >
                      E-mail
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formulario.email}
                      onChange={handleChange}
                      placeholder="seuemail@email.com"
                      className={`w-full rounded-xl border bg-[#FCF8F8] px-4 py-3 text-[#173C30] outline-none transition focus:ring-2 ${
                        erros.email
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#EADDE0] focus:border-[#A8C3A0] focus:ring-[#DCE9DF]"
                      }`}
                    />

                    {erros.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {erros.email}
                      </p>
                    )}
                  </div>

                  {/* TELEFONE */}
                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-medium text-[#173C30]"
                    >
                      Telefone
                    </label>

                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formulario.telefone}
                      onChange={handleChange}
                      placeholder="(19) 99999-9999"
                      className={`w-full rounded-xl border bg-[#FCF8F8] px-4 py-3 text-[#173C30] outline-none transition focus:ring-2 ${
                        erros.telefone
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#EADDE0] focus:border-[#A8C3A0] focus:ring-[#DCE9DF]"
                      }`}
                    />

                    {erros.telefone && (
                      <p className="mt-1 text-sm text-red-500">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                </div>

                {/* ASSUNTO */}
                <div>
                  <label
                    htmlFor="assunto"
                    className="mb-2 block text-sm font-medium text-[#173C30]"
                  >
                    Assunto
                  </label>

                  <select
                    id="assunto"
                    name="assunto"
                    value={formulario.assunto}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-[#FCF8F8] px-4 py-3 text-[#173C30] outline-none transition focus:ring-2 ${
                      erros.assunto
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#EADDE0] focus:border-[#A8C3A0] focus:ring-[#DCE9DF]"
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="planejamento">
                      Planejamento do casamento
                    </option>
                    <option value="orcamento">
                      Solicitar orçamento
                    </option>
                    <option value="servicos">
                      Conhecer os serviços
                    </option>
                    <option value="duvida">
                      Tirar uma dúvida
                    </option>
                    <option value="outro">Outro assunto</option>
                  </select>

                  {erros.assunto && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.assunto}
                    </p>
                  )}
                </div>

                {/* MENSAGEM */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium text-[#173C30]"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formulario.mensagem}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Conte um pouco sobre o casamento que você está planejando..."
                    className={`w-full resize-none rounded-xl border bg-[#FCF8F8] px-4 py-3 text-[#173C30] outline-none transition focus:ring-2 ${
                      erros.mensagem
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#EADDE0] focus:border-[#A8C3A0] focus:ring-[#DCE9DF]"
                    }`}
                  />

                  {erros.mensagem && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.mensagem}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#173C30] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#285443] hover:shadow-lg active:scale-[0.98]"
                >
                  <FaPaperPlane />
                  Enviar mensagem
                </button>

                <p className="text-center text-xs text-[#8B9A91]">
                  Ao enviar, nossa equipe receberá suas informações para entrar
                  em contato.
                </p>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Contato;
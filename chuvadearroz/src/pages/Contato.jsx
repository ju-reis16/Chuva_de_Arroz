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

import Header from "../components/Header";

// Schema de validação com Zod
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

  // Atualiza os campos do formulário
  const handleChange = (evento) => {
    const { name, value } = evento.target;

    setFormulario((dados) => ({
      ...dados,
      [name]: value,
    }));

    // Remove o erro enquanto o usuário corrige o campo
    if (erros[name]) {
      setErros((dados) => ({
        ...dados,
        [name]: "",
      }));
    }

    // Esconde a mensagem de sucesso ao alterar o formulário
    if (enviado) {
      setEnviado(false);
    }
  };

  // Envia o formulário
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

      <main className="min-h-screen bg-[#f5f2ec] text-[#6f6f6f]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#faf8f3] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="mb-4 mt-16 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[3px] text-[#b8956a]">
                <FaHeart />
                Entre em contato
              </span>

              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
                Vamos conversar sobre o seu grande dia
              </h1>

              <p className="max-w-xl text-base leading-7 text-[#8f8f8f] md:text-lg">
                Conte para nós como você imagina o seu casamento. Nossa equipe
                está pronta para ajudar a transformar cada detalhe em um
                momento inesquecível.
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Informações */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[2px] text-[#b8956a]">
                Fale conosco
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Estamos aqui para ajudar
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#8f8f8f]">
                Seja para tirar dúvidas, conhecer nossos serviços ou começar a
                planejar sua celebração, entre em contato. Será um prazer fazer
                parte dessa história com vocês.
              </p>

              <div className="mt-8 space-y-4">
                {informacoes.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5f0e8] text-[#b8956a]">
                      {item.icone}
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.titulo}</h3>

                      <p className="mt-1 text-sm text-[#8f8f8f]">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Envie uma mensagem
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#8f8f8f]">
                  Preencha os campos abaixo e nossa equipe entrará em contato.
                </p>
              </div>

              {enviado && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  Sua mensagem foi enviada com sucesso! Em breve entraremos em
                  contato com você.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium"
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
                    className={`w-full rounded-xl border bg-[#fefdfb] px-4 py-3 outline-none transition focus:ring-2 ${
                      erros.nome
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#e8e3d8] focus:border-[#b8956a] focus:ring-[#f5f0e8]"
                    }`}
                  />

                  {erros.nome && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.nome}
                    </p>
                  )}
                </div>

                {/* E-mail e telefone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
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
                      className={`w-full rounded-xl border bg-[#fefdfb] px-4 py-3 outline-none transition focus:ring-2 ${
                        erros.email
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#e8e3d8] focus:border-[#b8956a] focus:ring-[#f5f0e8]"
                      }`}
                    />

                    {erros.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {erros.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-medium"
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
                      className={`w-full rounded-xl border bg-[#fefdfb] px-4 py-3 outline-none transition focus:ring-2 ${
                        erros.telefone
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#e8e3d8] focus:border-[#b8956a] focus:ring-[#f5f0e8]"
                      }`}
                    />

                    {erros.telefone && (
                      <p className="mt-1 text-sm text-red-500">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label
                    htmlFor="assunto"
                    className="mb-2 block text-sm font-medium"
                  >
                    Assunto
                  </label>

                  <select
                    id="assunto"
                    name="assunto"
                    value={formulario.assunto}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-[#fefdfb] px-4 py-3 outline-none transition focus:ring-2 ${
                      erros.assunto
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#e8e3d8] focus:border-[#b8956a] focus:ring-[#f5f0e8]"
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="planejamento">
                      Planejamento do casamento
                    </option>
                    <option value="orcamento">Solicitar orçamento</option>
                    <option value="servicos">Conhecer os serviços</option>
                    <option value="duvida">Tirar uma dúvida</option>
                    <option value="outro">Outro assunto</option>
                  </select>

                  {erros.assunto && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.assunto}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium"
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
                    className={`w-full resize-none rounded-xl border bg-[#fefdfb] px-4 py-3 outline-none transition focus:ring-2 ${
                      erros.mensagem
                        ? "border-red-400 focus:ring-red-100"
                        : "border-[#e8e3d8] focus:border-[#b8956a] focus:ring-[#f5f0e8]"
                    }`}
                  />

                  {erros.mensagem && (
                    <p className="mt-1 text-sm text-red-500">
                      {erros.mensagem}
                    </p>
                  )}
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#b8956a] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#a6845c] hover:shadow-lg active:scale-[0.98]"
                >
                  <FaPaperPlane />
                  Enviar mensagem
                </button>

                <p className="text-center text-xs text-[#b0b0b0]">
                  Ao enviar, nossa equipe receberá suas informações para entrar
                  em contato.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contato;
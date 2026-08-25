import { useState } from "react";
import { z } from "zod";
import { FaHeart, FaCheckCircle } from "react-icons/fa";

const schema = z.object({
  nome: z.string().min(3, "Nome inválido"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  acompanhantes: z.coerce.number().min(0).max(10),
  presenca: z.enum(["sim", "nao"], { message: "Selecione uma opção" }),
  mensagem: z.string().max(300),
});

export default function Formulario() {
  const [dados, setDados] = useState({
    nome: "", email: "", telefone: "", acompanhantes: 0,
    presenca: "", mensagem: "",
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const mudar = (e) =>
    setDados({ ...dados, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const r = schema.safeParse(dados);

    if (!r.success) {
      setErro(r.error.issues[0].message);
      return;
    }

    setErro("");
    setSucesso(true);
    console.log(r.data);
  };

  const input =
    "w-full p-3 rounded-xl border border-[#C9DED1] bg-white outline-none focus:border-[#2E6B55]";

  return (
    <section id="confirmacao" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-[#2E6B55]">
            Confirme sua presença
          </p>
          <h2 className="text-4xl font-serif text-[#173C30] my-4">
            Será uma alegria ter você conosco.
          </h2>
          <p className="text-[#64756D]">
            Preencha seus dados para confirmar sua presença.
          </p>
        </div>

        <form
          onSubmit={enviar}
          className="bg-[#EAF3ED] p-6 md:p-10 rounded-[2rem] border border-[#C9DED1]"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["nome", "Nome completo"],
              ["email", "E-mail"],
              ["telefone", "Telefone"],
              ["acompanhantes", "Acompanhantes"],
            ].map(([name, placeholder]) => (
              <input
                key={name}
                name={name}
                type={name === "email" ? "email" : name === "acompanhantes" ? "number" : "text"}
                placeholder={placeholder}
                value={dados[name]}
                onChange={mudar}
                className={input}
              />
            ))}
          </div>

          <div className="my-6 text-[#173C30]">
            <p className="font-semibold mb-2">Você estará presente?</p>
            <label className="mr-5">
              <input type="radio" name="presenca" value="sim" onChange={mudar} /> Sim
            </label>
            <label>
              <input type="radio" name="presenca" value="nao" onChange={mudar} /> Não
            </label>
          </div>

          <textarea
            name="mensagem"
            rows="4"
            maxLength="300"
            placeholder="Mensagem para os noivos"
            onChange={mudar}
            className={`${input} resize-none`}
          />

          {erro && <p className="text-red-500 mt-2">{erro}</p>}

          <button
            className="w-full mt-5 p-4 rounded-xl bg-[#174C3C] text-white hover:bg-[#2E6B55]"
          >
            Confirmar presença <FaHeart className="inline ml-2" />
          </button>

          {sucesso && (
            <p className="mt-5 text-[#2E6B55]">
              <FaCheckCircle className="inline mr-2" />
              Confirmação enviada!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
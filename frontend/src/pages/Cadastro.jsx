import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Cadastro.scss";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    escolaridade: "",
    curso: "",
    email: "",
    telefone: "",
    chegada: "",
    cpf: "",
    origem: "",
    aluno: "",
  });

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:5010/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (resposta.ok) {
        setMensagem("✅ Cadastro realizado com sucesso!");
        setFormData({
          nome: "",
          escolaridade: "",
          curso: "",
          email: "",
          telefone: "",
          chegada: "",
          cpf: "",
          origem: "",
          aluno: "",
        });


        setTimeout(() => {
          navigate("/confirmacao");
        }, 1000);

      } else {
        setMensagem(" Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      setMensagem(" Não foi possível conectar ao servidor.");
    }
  };

  return (
    <section className="cadastro">
      <div className="cadastro__container">
        <h2>Formulário de cadastro</h2>
        <p>Preencha seus dados para garantir sua participação</p>

        <form className="cadastro__form" onSubmit={handleSubmit}>
          <div className="form-group full">
            <label>Nome completo<span className="required">*</span></label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label>Escolaridade</label>
            <select
              name="escolaridade"
              value={formData.escolaridade}
              onChange={handleChange}
            >
              <option value="">Selecione sua escolaridade</option>
              <option>Ensino Médio</option>
              <option>Ensino Técnico</option>
              <option>Ensino Superior</option>
            </select>
          </div>

          <div className="form-group">
            <label>Interesse em curso</label>
            <select
              name="curso"
              value={formData.curso}
              onChange={handleChange}
            >
              <option value="">Selecione o curso de interesse</option>
              <option>Administração</option>
              <option>Comunicação Visual</option>
              <option>Informática</option>
              <option>Eletromecânica</option>
              <option>Inglês</option>
              <option>Automação Residencial</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
            />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="form-group">
            <label>Previsão de chegada na feira</label>
            <select
              name="chegada"
              value={formData.chegada}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </div>

          <div className="form-group">
            <label>CPF<span className="required">*</span></label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="Digite seu CPF"
              required
            />
          </div>

          <div className="form-group full">
            <label>Como ficou sabendo da feira?</label>
            <select
              name="origem"
              value={formData.origem}
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              <option>Redes sociais</option>
              <option>Indicação</option>
              <option>Outros</option>
            </select>
          </div>

          <div className="form-group full">
            <label>
              Já foi aluno do Instituto Nossa Senhora de Fátima<span className="required">*</span>
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="aluno"
                  value="sim"
                  checked={formData.aluno === "sim"}
                  onChange={handleChange}
                /> SIM
              </label>
              <label>
                <input
                  type="radio"
                  name="aluno"
                  value="nao"
                  checked={formData.aluno === "nao"}
                  onChange={handleChange}
                /> NÃO
              </label>
            </div>
          </div>

          <div className="form-group full center">
            <button type="submit">Confirmar cadastro</button>
          </div>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </section>
  );
}

export default Cadastro;

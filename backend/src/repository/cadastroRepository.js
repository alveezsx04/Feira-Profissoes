import { connection } from "../config/db.js";


function formatarData(dataStr) {
  if (!dataStr) return null;


  if (dataStr.includes("/")) {
    const [dia, mes, ano] = dataStr.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  }


  const data = new Date(dataStr);
  if (!isNaN(data.getTime())) {
    return data.toISOString().split("T")[0];
  }

  return null;
}

export async function inserirCadastro(novoCadastro) {
  const comando = `
    INSERT INTO tb_cadastro
    (nm_nome, ds_escolaridade, ds_curso_interesse, ds_email, ds_telefone, dt_chegada, ds_cpf, ds_origem, bt_ex_aluno)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const dtChegada = formatarData(novoCadastro.chegada);
  const exAluno = novoCadastro.exAluno ? 1 : 0;

  const [result] = await connection.query(comando, [
    novoCadastro.nome || null,
    novoCadastro.escolaridade || null,
    novoCadastro.cursoInteresse || null,
    novoCadastro.email || null,
    novoCadastro.telefone || null,
    dtChegada,
    novoCadastro.cpf || null,
    novoCadastro.origem || null,
    exAluno
  ]);

  return result.insertId;
}

export async function listarCadastros() {
  const comando = `SELECT * FROM tb_cadastro`;
  const [linhas] = await connection.query(comando);
  return linhas;
}

export async function consultarCadastro(id) {
  const comando = `SELECT * FROM tb_cadastro WHERE id_cadastro = ?`;
  const [linhas] = await connection.query(comando, [id]);
  return linhas[0];
}

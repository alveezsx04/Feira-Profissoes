import * as repo from "../repository/cadastroRepository.js";


export async function cadastrar(req, res) {
  try {
    const novo = req.body;


    if (!novo.nome || !novo.email) {
      return res.status(400).json({ message: "Nome e email são obrigatórios" });
    }


    const id = await repo.inserirCadastro(novo);

    res.status(201).json({ message: "Cadastro criado com sucesso!", id });

  } catch (erro) {
    console.error("Erro ao cadastrar:", erro.message);
    res.status(500).json({ message: "Erro interno ao criar cadastro" });
  }
}

export async function listar(req, res) {
  try {
    const cadastros = await repo.listarCadastros();
    res.json(cadastros);
  } catch (erro) {
    console.error("Erro ao listar:", erro.message);
    res.status(500).json({ message: "Erro interno ao buscar cadastros" });
  }
}

export async function consultar(req, res) {
  try {
    const { id } = req.params;
    const cadastro = await repo.consultarCadastro(id);

    if (cadastro) {
      res.json(cadastro);
    } else {
      res.status(404).json({ message: "Cadastro não encontrado" });
    }

  } catch (erro) {
    console.error("Erro ao consultar:", erro.message);
    res.status(500).json({ message: "Erro interno ao consultar cadastro" });
  }
}

const express = require("express");
const app = express();
const listaAlunos = require('./alunos');
app.use(express.json());



app.get("/alunos", (req, res) => {
  const { nome, media } = req.query;

  let alunosFiltrados = listaAlunos.alunos;

  if (nome) {
    alunosFiltrados = listaAlunos.filtrarPorNome(nome);
  }

  if (media) {
    alunosFiltrados = listaAlunos.filtrarPorMedia(media);
  }

  res.json(alunosFiltrados);
});


app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;

  if (!nome || !matricula || !media) {
    res.status(400).json({ message: "Erro, insira os dados corretos!" });
  } else {
    const novoAluno = { nome, matricula, media };
    listaAlunos.adicionarAluno(novoAluno);
    res.status(201).json({ message: `Aluno ${nome} com a matrícula ${matricula} e média ${media} foi adicionado com sucesso.` });
  }
});

app.delete("/alunos/:index", (req, res) => {
  const { index } = req.params;
  const alunoRemovido = listaAlunos.removerAluno(index);

  if(!alunoRemovido) {
    res.status(404).json({ message: 'Aluno não encontrado.'});
  } else {
    res.json(`Aluno(a) ${alunoRemovido.nome} removido com sucesso.`)
  }
});

app.put("/alunos/:index", (req, res) => {
  const { index } = req.params
  const { nome, media } = req.body;
  const aluno = listaAlunos.alunos[index];

  if(!aluno) {
    res.status(404).json({ message: 'Aluno não encontrado.'});
  } else {
    listaAlunos.atualizarAluno(index, nome, media);
    res.json(`Aluno ${nome} atualizado com sucesso.`)
  }
});



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
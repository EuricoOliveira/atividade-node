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
    const alunos = []
  
    if(!nome || !matricula || !media) {
      res.status(400).json({message: "Erro, insira os dados corretos!"})
    } else {
      alunos.push({ nome, matricula, media});
      res.json(`Aluno: ${nome}, matricula: ${matricula}, media: ${media}, foi adicionado com sucesso.`);
    };
  });

app.post("/alunos/deletar/:index", (req, res) => {
  
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
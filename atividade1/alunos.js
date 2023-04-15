const fs = require('fs');

const alunos = [
    { nome: 'João Silva', media: 7.5 },
    { nome: 'Maria Santos', media: 8.0 },
    { nome: 'Pedro Almeida', media: 6.0 },
    { nome: 'Ana Souza', media: 9.0 },
    { nome: 'Carlos Oliveira', media: 7.0 }
  ];
  
  function filtrarPorNome(nome) {
    return alunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
  }
  
  function filtrarPorMedia(media) {
    return alunos.filter(aluno => aluno.media >= media);
  }

  function adicionarAluno(aluno) {
    alunos.push(aluno);
    fs.writeFile('db.json', JSON.stringify({ alunos }), function(err) {
      if (err) {
        console.log("Erro ao escrever arquivo", err);
      } else {
        console.log("Arquivo escrito com sucesso!");
      }
    });
  }

  function atualizarAluno(matricula, alunoAtualizado) {
    const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula);
    if (alunoIndex >= 0) {
      alunos[alunoIndex] = alunoAtualizado;
      fs.writeFile('db.json', JSON.stringify({ alunos }), function(err) {
        if (err) {
          console.log("Erro ao escrever arquivo", err);
        } else {
          console.log("Arquivo escrito com sucesso!");
        }
      });
    }
  }

  function removerAluno(index) {
    const i = parseInt(index);
    if (isNaN(i) || i < 0 || i >= alunos.length) {
      return false; // retorna falso se o aluno não for encontrado
    }
    const alunoRemovido = alunos.splice(i, 1)[0];
    fs.writeFile('db.json', JSON.stringify({ alunos }), function(err) {
      if (err) {
        console.log("Erro ao escrever arquivo", err);
      } else {
        console.log("Arquivo escrito com sucesso!");
      }
    });
    return alunoRemovido; // retorna o aluno removido se encontrado
  }
  
  module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia,
    adicionarAluno,
    atualizarAluno,
    removerAluno
  };
  
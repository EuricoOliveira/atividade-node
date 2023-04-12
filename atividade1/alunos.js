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
  
  module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia
  };
  
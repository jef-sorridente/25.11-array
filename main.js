const arrayAlunos = [
  { nome: "Jeferson", nota: 7 },
  { nome: "Vitoria", nota: 9 },
  { nome: "Pedro", nota: 8 },
  { nome: "Amanda", nota: 5 },
  { nome: "Vitor", nota: 2 },
];

function retornaNotas() {
  const notaMinima = 6;
  arrayAlunos.forEach(function (alunos) {
    if (notaMinima <= alunos.nota) {
      console.log(`Aluno: ${alunos.nome} Nota:${alunos.nota}`);
    }
  });
}

retornaNotas();

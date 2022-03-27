function melhorMedia(obj) {
    // partindo de um array com nome / array de notas; foi criado um array com o nome e a média das notas
    const alunosMedias = Object.entries(obj).map(e => [e[0], e[1].reduce((acumulador, atual) => acumulador + atual) / e[1].length]).sort((a, b) => a[1] > b[1]? -1 : 1) // ordenado por ordem decrescente de nota

    const melhorAluno = alunosMedias[0][0] // sabendo q o array está em ordem decrescente de nota, pode-se assumir que o melhor aluno está na primeira posição
    const nota = alunosMedias[0][1]
    return {nome: melhorAluno, media: nota}
}

console.log(melhorMedia({ 
    Joao: [8, 7.6, 8.9, 6], // média 7.625 
    Mariana: [9, 6.6, 7.9, 8], // média 7.875 
    Carla: [7, 7, 8, 9] // média 7.75 
  }))
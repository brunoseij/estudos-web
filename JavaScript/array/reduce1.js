// a função reduce recebe como parâmetro um callback que recebe como parametro um acumulador (por padrão o elemento de indice 0 do array) e o elemento de indice seguinte, aplica o callback até acabar o array (acumulador = atual, atual[i+1])
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual, 0)

console.log(resultado)
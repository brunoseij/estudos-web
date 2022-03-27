// set não aceita elementos repetidos, e os elementos não são indexados

const times =  new Set()
times.add('São Paulo').add('Corinthians').add('Santos').add('Palmeiras').add('São Paulo')
console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Santos')
console.log(times.has('Santos'))

times.forEach(v => console.log(v))

const nomes = ['Jones', 'Guilherme', 'Gustavo', 'Yoshi', 'Yoshi']
const nomesSet = new Set(nomes)
console.log(nomesSet)
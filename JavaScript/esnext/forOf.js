const a = ['primeiro', 'segundo', 'terceiro', 'terceiro']
const s = new Set(a)
const m = new Map([
    ['a', true],
    ['b', false],
    ['c', false]
])

console.log('Para o array:')
for (let elemento of a){
    console.log(elemento)
}

console.log('Para o Set:')
for (let [elemento] of s){
    console.log(elemento)
}

console.log('Para o Map')
for (let [c, v] of m){
    console.log(c, v)
}

for (let chave of m.keys()){
    console.log(chave)
}

for (let valor of m.values()){
    console.log(valor)
}
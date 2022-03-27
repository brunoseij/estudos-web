String.prototype.removerVogais = function(){
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return this.split('').filter(e => !vogais.includes(e)).reduce((ac, at) => ac + at)
}
console.log('aeioudsbbdfjanABCIKA'.removerVogais())
console.log('Fundamentos'.removerVogais())





/*
String.prototype.removerVogais = function(){
    return this.replace(/[aeiouAEIOU]/g, '')
}

console.log('aeioudsbbdfjanABCIKA'.removerVogais())
console.log('Fundamentos'.removerVogais())

*/
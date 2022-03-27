// map retorna um array de mesmo tamanho, porém aplica uma função para cada elemento
const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(e => {
    return e * 2
})
console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro) // como o resultado do map é um array, pode-se aplicar varias vezes seguidas
console.log(resultado2)
//evitar comentários óbvios em projetos profissionais
/*
comentários de 
várias linhas
*/
//comentários de uma linha
console.log(1+3)
console.log('1+3')
console.log('1'+'3')
console.log(1.3)


// também é possivel definir variáveis utilizando let ao invés de var (existem diferenças)
var quantidade = 10
var preco = 6.4
var imposto = 1.5

var precoFinal = (preco+imposto)*quantidade
console.log(`O preço unitário do produto sem impostos é ${preco}`)
console.log(`O preço unitario do produto com impostos é ${preco+imposto}`)
console.log(`Comprando 10 unidades do produto, voce paga ${quantidade*imposto} em impostos`)
console.log(`O preço total é ${precoFinal}`)

// só é preciso declarar uma variavel uma vez no código, para mudar o valor, é só colocar o nome da variável
imposto = 0.5
precoFinal = (preco+imposto)*quantidade

console.log(`O preço unitário do produto sem impostos é ${preco}`)
console.log(`O preço unitario do produto com impostos é ${preco+imposto}`)
console.log(`Comprando 10 unidades do produto, voce paga ${quantidade*imposto} em impostos`)
console.log(`O preço total é ${precoFinal}`)

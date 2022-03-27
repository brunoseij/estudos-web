// variáveis definidas com var podem ser acessadas fora do bloco de código, porém não fora do escopo de uma função
// evitar a utilização de variáveis globais, pois pode causar sobrescrita indevida de dados
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function Imprimevar(){
    var a = 123
    console.log(a)
}
Imprimevar()
// console.log(a)


// NÃO EXISTE ESCOPO LOCAL PRA VAR
var numero = 1
{
    {
        {
            {
                var numero = 2
                console.log(`dentro = ${numero}`)
            }
        }
    }
}
console.log(`fora = ${numero}`)
// closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const funcao = fora() // apesar da função ser chamada no escopo global, ela foi definida dentro de outra função, logo acessará os atributos correspondentes ao closure

console.log(funcao())
function tratarErroELancar(erro){
    // é o que aparecerá se durante a execução ocorrer um erro
    // evitar mostrar ao usuário detalhes de infraestrutura ou mensagens q não faça sentido ao usuário
    // se for mostrar para um usuário, use uma frase genérica, um código ou hash que identifique o erro para ele te mandar e ser possivel rastrear
    //throw true, throw 2
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado({name}) {
    try {
        console.log(`${name.toUpperCase()}!!!`)
    } catch(e) { // semelhante ao except, (e) é o objeto de erro
        tratarErroELancar(e)
    } finally { // será executado, independente de erros
        console.log('final')
    }
}

const pessoa = {
    nome: 'Jones',
    idade: 20,
}

imprimirNomeGritado(pessoa)
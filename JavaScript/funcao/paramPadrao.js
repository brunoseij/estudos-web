// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // gera um efeito colateral de 0 ser considerado como falso

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for estritamente diferente de undefined, retorna a, senão retorna 1
    b = 1 in arguments ? b : 1 // se existir o indice 1 no array arguments, significa que dois parametros foram passados, logo b existe
    c = isNaN(c) ? 1 : c // se C não for um número, o padrão se tornará 1 (estratégia mais segura das três)
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0), soma2('a', 'b', 'c'))

// valor padrao do es2015
// escolher essa preferencialmente
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0), soma3('a', 'b', 'c'))
function buscarPalavrasSemelhantes(palavra, array) {
    return array.filter(e => e.startsWith(palavra))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))

console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))
console.log(process.argv)
const anonimo = process.argv.indexOf('-a') !== -1 // process.argv é um array, se um item não estiver no array, seu indice é -1
// gera true se -a está no array, e false se não
if (anonimo){
    process.stdout.write('Fala Anonimo!!')
} else {
    process.stdout.write('Qual o seu nome? ')

    process.stdin.on('data', (data) => { // input padrão
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Olá ${nome}!!!\n`)
        process.exit()
    })
}
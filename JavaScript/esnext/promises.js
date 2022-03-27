// funções assincronas
function executarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

executarDepoisDe(3, 'Olá')
    .then((frase, abc) => frase.concat('!!!!')) // promise só retorna uma variavel, para passar mais de um valor, retornar objetos
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

console.log('executei antes')
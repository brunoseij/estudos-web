function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    const compraTV32 = trabalho1 != trabalho2

    const saudavel = !compraSorvete
    return {compraSorvete, saudavel, compraTV32, compraTV50}
}

console.log(compras(false,false))
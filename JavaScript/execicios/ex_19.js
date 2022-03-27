function lanchonete(item, quantidade) {
    switch (item) {
        case 100:
            console.log(`R$ ${(quantidade * 3).toFixed(2)}`)
            break
        case 200:
            console.log(`R$ ${(quantidade * 4).toFixed(2)}`)
            break
        case 300:
            console.log(`R$ ${(quantidade * 5.5).toFixed(2)}`)
            break
        case 400:
            console.log(`R$ ${(quantidade * 7.5).toFixed(2)}`)
            break
        case 500:
            console.log(`R$ ${(quantidade * 3.5).toFixed(2)}`)
            break
        case 600:
            console.log(`R$ ${(quantidade * 2.8).toFixed(2)}`)
            break
        default:
            console.log('Esse produto não existe')
    }
}

lanchonete(100, 3)
lanchonete(200, 8)
lanchonete(300, 9)
lanchonete(400, 4)
lanchonete(500, 5)
lanchonete(600, 6)
lanchonete(700, 7)
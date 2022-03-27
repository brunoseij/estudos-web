function barracaDeFrutas(fruta) {
    switch (fruta) {
        case 'Maçã':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis.')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log('Fruta inválida')
    }
}

barracaDeFrutas('Maçã')
barracaDeFrutas('Kiwi')
barracaDeFrutas('Melancia')
barracaDeFrutas('djkhsa')
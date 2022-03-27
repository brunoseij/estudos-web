function compraDeCarro(modelo) {
    switch (modelo) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            console.log('Tem certeza que não prefere esse outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

compraDeCarro('Hatch')
compraDeCarro('Sedan')
compraDeCarro('Motocicleta')
compraDeCarro('Caminhonete')
compraDeCarro('patinete')
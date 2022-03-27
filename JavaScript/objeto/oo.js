// código não executável

// procedural
processamento(valor1, valor2, valor3) // na programação procedural, existem métodos que tratam os dados externos

// orientada a objeto
const obj = {
    valor1,
    valor2,
    valor3,
    processamento() {
        //...
    }
}

// na orientação a objeto, são criados objetos que contém atributos próprios e métodos internos
objeto.processamento()

// principios importantes
// 1. abstração

// diz respeito à utilizar somente o que for necessário de um objeto, por exemplo em um carro, se fosse criar um objeto de um carro pra um sistema do detran algumas informações seria diferente de um carro para um sistema de uma mecânica.
// No sistema do detran, o número do chassi é importante, ja em uma mecanica não... (isso diz respeito aos metodos também, não faz sentido criar um método acelerar pra um objeto de carro em um sistema do detran)
// informações foram abstraidas conforme a necessidade

// 2. encapsulamento

// ter os detalhes de implementação escondidos, mostrar pra o usuário uma interface simplificada para a utilização
// ainda seguindo o exemplo do carro, alguém q sabe dirigir um carro, não necessariamente sabe como funciona um motor, ou seja, o motor tem seus métodos internos encapsulados no objeto motor, porém a interface de utilização do motor é algo mais simplificado (pedais)

// 3. herança (prototype)

// recebe atributos e comportamentos de um objeto pai. ex: herança de caracteristicas fisicas do pai e da mãe

// 4. polimorfismo

// o objeto carro é genérico, permite vários tipos diferentes de carros, cada um com seus valores, porém com a mesma funcionalidade
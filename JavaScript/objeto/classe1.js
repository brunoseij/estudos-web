class Lancamento{
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano
        this.fatura = []
    }

    addLancamento(...params){
        params.forEach(l => {
            this.fatura.push(l)
        })
    }

    sumario(){
        let valortotal = 0
        this.fatura.forEach(({valor}) => {
            valortotal += valor
        })
        return valortotal
    }
}

const salario = new Lancamento('Salario', 2000)
const contaLuz = new Lancamento('Conta de Luz', -200)

const janeiro = new CicloFinanceiro('fevereiro', 2022)
janeiro.addLancamento(salario, contaLuz)
console.log(janeiro.sumario())

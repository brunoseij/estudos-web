const axios = require('axios')
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

const chinesa = pessoa => pessoa.pais == 'China' && pessoa.genero == 'F'
const menorSalario = (acumulador, atual) => atual.salario < acumulador.salario? atual : acumulador

axios.get(url).then((res, req) => {
    const funcionarios = res.data

    const func = funcionarios
        .filter(chinesa)
        .reduce(menorSalario)

    console.log(func)
})
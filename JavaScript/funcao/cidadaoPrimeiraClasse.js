// cidadao de primera classe (primeira linha), é tratar a função como um dado, poder passar uma função como um parâmetro e etc (higher order function) habilita programação funcional/ oo

// função em JS é first-class object (citizens)


// criar de forma literal
function fun1() { // bloco é obrigatório nesse caso

}

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {console.log("Opa")}
obj.falar()

// Passar função como param
function run(fun) {
    fun()
}
run(obj.falar)
run(function() {console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4) // como o retorno da função é uma função, deve ser chamada como uma função
const cincoMais = soma(2, 3)
cincoMais(4)
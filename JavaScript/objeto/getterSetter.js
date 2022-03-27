const obj = {
    _valor: 0, // _ antes do nome da variável é convenção para atributos internos

    get valor(){return this._valor++}, // ao chamar obj.valor, ele retorna o valor, e incrementa o mesmo
    set valor(valor){ // ao definir um novo valor, verifica se este é maior do que o anterior, se não for, ignora
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(obj.valor, obj.valor)
console.log(obj.valor, obj.valor)

obj.valor = 10
console.log(obj.valor, obj.valor)

obj.valor = 3
console.log(obj.valor, obj.valor)
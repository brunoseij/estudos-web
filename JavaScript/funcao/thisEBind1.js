const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // nesse caso, this se refere à constante falar (provavelmente), por isso gera um erro

const falarDePessoa = pessoa.falar.bind(pessoa) // .bind assegura q o this sempre se referirá ao argumento passado
falarDePessoa()
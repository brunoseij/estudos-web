/* Se uma função for criada de maneira literal
function funcao () {}
o this pode variar conforme o contexto em que ela foi chamada
Se uma função for uma arrow function
const funcao = () => {console.log(this == window)}
o this sempre vai ser o escopo em que ela foi criada */

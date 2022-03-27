// as funções carregam consigo, o contexto em que elas foram definidas

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

// ao chamar o exec, será mostrado global ou local?
exec()
const mid1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const mid2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const mid3 = ctx => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1)) // se existir a lista de middlewares e for passado um indice dentro da lista, sera executado
    }
    execPasso(0)
}

const ctx = {}

exec(ctx, mid2, mid1, mid3)
console.log(ctx)